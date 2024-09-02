import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getAllContentDocuments(parentDirName: string) {
  const contentDirectory = path.join(
    process.cwd(),
    'src',
    'app',
    '(side-nav)',
    parentDirName,
  );

  const directories = fs.readdirSync(contentDirectory);

  return directories
    .map((dir) => {
      const mdxPath = path.join(contentDirectory, dir, 'content.mdx');
      const mdPath = path.join(contentDirectory, dir, 'content.md');

      let filePath = '';
      if (fs.existsSync(mdxPath)) {
        filePath = mdxPath;
      } else if (fs.existsSync(mdPath)) {
        filePath = mdPath;
      } else {
        return null; // Skip directories without a valid content file
      }

      const fileContent = fs.readFileSync(filePath, 'utf8');

      // Extract the front matter and content
      const { data, content } = matter(fileContent);

      return {
        id: dir, // Assuming the directory name is unique and can be used as an ID
        slug: `${parentDirName}/${dir}`,
        title: data.title || dir,
        content, // raw markdown content
      };
    })
    .filter(Boolean); // Filter out nulls
}

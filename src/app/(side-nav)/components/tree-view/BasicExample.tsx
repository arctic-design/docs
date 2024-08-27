import { TreeItem, Box, TreeView } from '@arctic-kit/snow';

const treeData: TreeItem[] = [
  {
    id: '1',
    label: 'Parent 1',
    items: [
      {
        id: '1-1',
        label: 'Child 1',
        items: [
          { id: '1-1-1', label: 'Grandchild 1-1-1' },
          { id: '1-1-2', label: 'Grandchild 1-1-2' },
        ],
      },
      {
        id: '1-2',
        label: 'Child 2',
        items: [
          { id: '1-2-1', label: 'Grandchild 1-2-1' },
          { id: '1-2-2', label: 'Grandchild 1-2-2' },
        ],
      },
    ],
  },
  {
    id: '2',
    label: 'Parent 2',
  },
];

export function Demo() {
  return (
    <Box sx={{ minHeight: 200, minWidth: 150 }}>
      <TreeView items={treeData} />
    </Box>
  );
}

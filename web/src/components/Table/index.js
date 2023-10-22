import { Table, Button } from "rsuite";
const { Column, HeaderCell, Cell } = Table;

const TableComponent = ({ data, config, action, content, loading, onRowClick }) => {
  return (
    <Table loading={loading} height={400} data={data} onRowClick={onRowClick}>
      {config.map((c) => (
        <Column flexGrow={!c.width ? 1 : 0} width={c.width} fixed={c.fixed}>
          <HeaderCell>{c.label}</HeaderCell>
          {!c.content ? (
            <Cell dataKey={c.key} />
          ) : (
            <Cell>{(item) => c.content(item)}</Cell>
          )}
        </Column>
      ))}
      <Column width={150} fixed="right">
        <HeaderCell> Ações </HeaderCell>

        <Cell style={{ padding: '10px' }}>
          {() => (
            <Button color="blue" appearance="primary" size="xs" >
              {action}
            </Button>
          )}
        </Cell>
      </Column>
    </Table>
  );
};

export default TableComponent;

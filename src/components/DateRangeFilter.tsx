import './styles/daterangefilter.scss'
import Input from "./Input";


import { useMemo } from "react";


export const Filter = ({ column }: any) => {
    return (
      <div style={{ marginTop: 5 }}>
        {column.canFilter && column.render("Filter")}
      </div>
    );
};

export function dateBetweenFilterFn(rows: any[], id: string | number, filterValues: (string | number | Date)[]) {
    const sd = filterValues[0] ? new Date(filterValues[0]) : undefined;
    const ed: any = filterValues[1] ? new Date(filterValues[1]) : undefined;
    if (ed || sd) {
      return rows.filter((r: { values: { [x: string]: string; }; }) => {
        // format data
        var dateAndHour = r.values[id].split(" ");
        var [year, month, day] = dateAndHour[0].split("-");
        var date = [month, day, year].join("/");
        var hour = dateAndHour[1];
        var formattedData = date + " " + hour;
  
        const cellDate = new Date(formattedData);
  
        if (ed && sd) {
          return cellDate >= sd && cellDate <= ed;
        } else if (sd) {
          return cellDate >= sd;
        } else {
          return cellDate <= ed;
        }
      });
    } else {
      return rows;
    }
}
export const DateRangeFilter = ({ column: { filterValue = {}, preFilteredRows, setFilter, id } }: any) => {
    const [min, max] = useMemo<any[]>(() => {
        let min = preFilteredRows.length
        ? new Date(preFilteredRows[0].values[id])
        : new Date(0)
        let max = preFilteredRows.length
        ? new Date(preFilteredRows[0].values[id])
        : new Date(0)

        preFilteredRows.forEach((row: { values: { [x: string]: string | number | Date; }; }) => {
            const rowDate = new Date(row.values[id]);
      
            min = rowDate <= min ? rowDate : min
            max = rowDate >= max ? rowDate : max
          });

          return [min, max]
    }, [id, preFilteredRows])

    return (
        <div className="daterange-filter">
            <section className="mobile-daterange-filter">
                <form>
                    <Input
                        type="date"
                        // placeholder="Search..."
                        id="start-date"
                        name="start-date"
                        value={filterValue[0] || ""}
                        onChange={(event: any) => {
                            const val = event.target.value
                            setFilter((old = []) => [val ? val : undefined, old[1]])
                        }}
                    />
                    {"to"}
                    <Input
                        type="date"
                        // placeholder="Search..."
                        id="start-date"
                        name="end-date"
                        value={filterValue[1]?.slice(0, 10) || ""}
                        onChange={(event: any) => {
                            const val = event.target.value
                            setFilter((old = []) => [
                                old[0],
                                val ? val.concat("T23:59:59.999Z") : undefined
                            ])
                        }}
                    />
                </form>
            </section>
            <section className="desktop-daterange-filter">
                <form>
                <Input
                    type="date"
                    // placeholder="Search..."
                    id="start-date"
                    name="start-date"
                    value={filterValue[0] || ""}
                    onChange={(event: any) => {
                        const val = event.target.value
                        setFilter((old = []) => [val ? val : undefined, old[1]])
                    }}
                />
                    {"to"}
                <Input
                    type="date"
                    // placeholder="Search..."
                    id="start-date"
                    name="end-date"
                    value={filterValue[1]?.slice(0, 10) || ""}
                    onChange={(event: any) => {
                        const val = event.target.value
                        setFilter((old = []) => [
                            old[0],
                            val ? val.concat("T23:59:59.999Z") : undefined
                        ])
                    }}
                />       
                </form>
            </section>
            <section className='mobile-table'>
                
            </section>
        </div>
    )
}
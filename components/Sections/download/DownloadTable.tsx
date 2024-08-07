"use client"

import { AgGridReact } from 'ag-grid-react';
import "@/styles/ag-grid-theme.css";
import { useEffect, useState } from 'react';
import { getParsedReleases } from '@/lib/getReleases.tsx';
import { parseNumber } from '@/lib/utils';

export default function DownloadTable() {
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadReleases = async () => {
      try {
        const releases = await getParsedReleases();
        setRowData(releases);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.error("Loading releases failed!")
      }
    };

    loadReleases();
  }, []);
  

  const [colDefs, setColDefs] = useState([
    { field: "version", pinned: true, movable: false },
    {
      field: "code",
      headerName: "Source Code",
      cellRenderer: ((props: any) => {
        return <a href={props.value} className='text-blue-500'>Open</a>
      })
    },
    {
      field: "downloads",
      cellRenderer: ((props: any) => {
        return parseNumber(props.value)
      })
     },
    {
      field: "v121",
      headerName: "v1.21",
      cellRenderer: ((props: any) => {
        return props.value === null ? "Not available" : (
          <a href={props.value} className="text-blue-500">Download</a>
        );
      })
    },
    { field: "v1206", 
      headerName: "v1.20.6",
      cellRenderer: ((props: any) => {
        return props.value === null ? "Not available" : (
          <a href={props.value} className="text-blue-500">Download</a>
        );
      })
     },
    { field: "v1204", 
      headerName: "v1.20.4",
      cellRenderer: ((props: any) => {
        return props.value === null ? "Not available" : (
          <a href={props.value} className="text-blue-500">Download</a>
        );
      })
     },
    { field: "v1202", 
      headerName: "v1.20.2",
      cellRenderer: ((props: any) => {
        return props.value === null ? "Not available" : (
          <a href={props.value} className="text-blue-500">Download</a>
        );
      })
     },
    { field: "v120", 
      headerName: "v1.20",
      cellRenderer: ((props: any) => {
        return props.value === null ? "Not available" : (
          <a href={props.value} className="text-blue-500">Download</a>
        );
      })
     },
  ]);

  return (
    <div
      className="ag-theme-custom my-4 h-[500px]"
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        loading={loading}
        suppressTouch={false}
      />
    </div>
  )
}
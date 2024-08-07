"use client"

import { AgGridReact } from 'ag-grid-react';
import "@/styles/ag-grid-theme.css";
import { useEffect, useState } from 'react';
import { getParsedReleases } from '@/lib/getReleases.tsx';
import { parseNumber } from '@/lib/utils';

export default function DownloadTable() {
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [colDefs, setColDefs]: any[] = useState();

  useEffect(() => {
    setColDefs(
      [
        { field: "version", pinned: true, movable: false },
        {
          field: "code",
          headerName: "Source Code",
          cellRenderer: (params: any) => {
            return (
              <a href={params.value} className="text-blue-500">
                Open
              </a>
            );
          },
        },
        {
          field: "downloads",
          cellRenderer: (params: any) => {
            return parseNumber(params.value);
          },
        },
        {
          field: "v121",
          headerName: "v1.21",
          cellRenderer: (params: any) => {
            return params.value === null ? (
              "Not available"
            ) : (
              <a href={params.value} className="text-blue-500">
                Download
              </a>
            );
          },
        },
        {
          field: "v1206",
          headerName: "v1.20.6",
          cellRenderer: (params: any) => {
            return params.value === null ? (
              "Not available"
            ) : (
              <a href={params.value} className="text-blue-500">
                Download
              </a>
            );
          },
        },
        {
          field: "v1204",
          headerName: "v1.20.4",
          cellRenderer: (params: any) => {
            return params.value === null ? (
              "Not available"
            ) : (
              <a href={params.value} className="text-blue-500">
                Download
              </a>
            );
          },
        },
        {
          field: "v1202",
          headerName: "v1.20.2",
          cellRenderer: (params: any) => {
            return params.value === null ? (
              "Not available"
            ) : (
              <a href={params.value} className="text-blue-500">
                Download
              </a>
            );
          },
        },
        {
          field: "v120",
          headerName: "v1.20",
          cellRenderer: (params: any) => {
            return params.value === null ? (
              "Not available"
            ) : (
              <a href={params.value} className="text-blue-500">
                Download
              </a>
            );
          },
        },
      ]
    );
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



  return (
    <div
      className="ag-theme-custom my-4 h-[500px]"
    >
      <AgGridReact
        columnDefs={colDefs}
        rowData={rowData}
        loading={loading}
        suppressTouch={false}
        pagination={true}
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 20, 30, 50, 100]}
      />
    </div>
  )
}
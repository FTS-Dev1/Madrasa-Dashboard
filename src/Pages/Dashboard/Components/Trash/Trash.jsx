import React, { useState } from 'react'

// Components :
import Table from '../../../../components/table/Table'

// CSS :
import "./Trash.scss"




const Trash = () => {

    const [reports, setReports] = useState([
        {
            id: 126,
            type: "Offer",
            name: `VS-offer-20`,
            objectCreated: "2022-01-22",
            createdBy: "Robert Krzykawski",
            objectDeleted: "2022-02-12",
            company: "Vitastenar AB",
            siteID: "Vitastenar-app",
            deletedBy: "Robert Krzykawski",
            actions: "Restore"
        },
        {
            id: 126,
            type: "Offer",
            name: `VS-offer-20`,
            objectCreated: "2022-01-22",
            createdBy: "Robert Krzykawski",
            objectDeleted: "2022-02-12",
            company: "Vitastenar AB",
            siteID: "Vitastenar-app",
            deletedBy: "Robert Krzykawski",
            actions: "Restore"
        },
        {
            id: 126,
            type: "Offer",
            name: `VS-offer-20`,
            objectCreated: "2022-01-22",
            createdBy: "Robert Krzykawski",
            objectDeleted: "2022-02-12",
            company: "Vitastenar AB",
            siteID: "Vitastenar-app",
            deletedBy: "Robert Krzykawski",
            actions: "Restore"
        },
        {
            id: 126,
            type: "Offer",
            name: `VS-offer-20`,
            objectCreated: "2022-01-22",
            createdBy: "Robert Krzykawski",
            objectDeleted: "2022-02-12",
            company: "Vitastenar AB",
            siteID: "Vitastenar-app",
            deletedBy: "Robert Krzykawski",
            actions: "Restore"
        },
        {
            id: 126,
            type: "Offer",
            name: `VS-offer-20`,
            objectCreated: "2022-01-22",
            createdBy: "Robert Krzykawski",
            objectDeleted: "2022-02-12",
            company: "Vitastenar AB",
            siteID: "Vitastenar-app",
            deletedBy: "Robert Krzykawski",
            actions: "Restore"
        },
        {
            id: 126,
            type: "Offer",
            name: `VS-offer-20`,
            objectCreated: "2022-01-22",
            createdBy: "Robert Krzykawski",
            objectDeleted: "2022-02-12",
            company: "Vitastenar AB",
            siteID: "Vitastenar-app",
            deletedBy: "Robert Krzykawski",
            actions: "Restore"
        },
        {
            id: 126,
            type: "Offer",
            name: `VS-offer-20`,
            objectCreated: "2022-01-22",
            createdBy: "Robert Krzykawski",
            objectDeleted: "2022-02-12",
            company: "Vitastenar AB",
            siteID: "Vitastenar-app",
            deletedBy: "Robert Krzykawski",
            actions: "Restore"
        },

    ])

    const columns = [
        {
            title: 'Object ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Object Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Object Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Object Created',
            dataIndex: 'objectCreated',
            key: 'objectCreated',
        },
        {
            title: 'Created By',
            dataIndex: 'createdBy',
            key: 'createdBy',
        },
        {
            title: 'Object Deleted',
            dataIndex: 'objectDeleted',
            key: 'objectDeleted',
        },
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
        },
        {
            title: 'Site ID',
            dataIndex: 'siteID',
            key: 'siteID',
        },
        {
            title: 'Deleted By',
            dataIndex: 'deletedBy',
            key: 'deletedBy',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
        },
    ]

    return (
        <>
            <Table
                rows={reports}
                columns={columns}
                hasSearch
            />
        </>
    )
}

export default Trash
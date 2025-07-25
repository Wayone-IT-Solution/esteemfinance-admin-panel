import { formatDate } from "../../../hooks/general";
import { FormField } from "../../../hooks/types";


export const BillingFormType: FormField[] = [
  {
    type: "select",
    required: true,
    name: "packing",
    label: "Packing ID",
    placeholder: "Select quotation",
    options: [],
  },
  {
    type: "select",
    required: true,
    name: "preparedBy",
    label: "Invoice Prepared By",
    placeholder: "Select Prepared By",
    options: [],
  },
  {
    type: "date",
    required: true,
    name: "billDate",
    label: "Invoice Date",
    minDate: formatDate(new Date()),
    placeholder: "Select Invoice Date",
  },
  {
    name: "referenceNo",
    type: "text",
    required: true,
    label: "Reference No.",
    placeholder: "Enter Reference No.",
  },
  {
    type: "select",
    required: true,
    name: "invoiceTo",
    label: "Select Ledger / party",
    placeholder: "Select Ledger / party",
    options: [],
  },
  {
    name: "shipTo",
    type: "select",
    required: true,
    label: "Ship To",
    placeholder: "Select Ship To",
    options: [],
  },
  {
    type: "br",
    name: "Transportation",
    label: "Transportation Details",
    widthFull: true,
  },
  {
    name: "vehicleDetails",
    type: "text",
    label: "Vehicle Details",
    placeholder: "Enter Vehicle Details",
  },
  {
    name: "driverName",
    type: "text",
    label: "Driver Name",
    placeholder: "Enter driver name",
  },
  {
    name: "driverPhone",
    type: "text",
    label: "Driver Phone Number",
    placeholder: "Enter driver phone number",
  },
  {
    name: "dispatchMode",
    type: "select",
    label: "Dispatch Mode",
    placeholder: "Select Dispatch Mode",
    options: [
      { label: "Air", value: "Air" },
      { label: "Road", value: "Road" },
      { label: "Rail", value: "Railway" },
      { label: "Sea", value: "Sea / Ocean" },
    ],
  },
  {
    name: "placeOfSupply",
    type: "text",
    label: "Place of Supply",
    placeholder: "Enter Place of Supply",
  },
  {
    name: "transportThrough",
    type: "text",
    label: "Transport Through",
    placeholder: "Enter Transport Details",
  },
  {
    name: "grLrNo",
    type: "text",
    label: "GR/LR No",
    placeholder: "Enter GR/LR Number",
  },
  {
    rows: 1,
    type: "textarea",
    name: "remarks",
    label: "Remarks",
    placeholder: "Enter Remarks",
  },
  {
    name: "billing",
    type: "billing",
    widthFull: true,
    label: "All Products",
    options: [],
  },
];

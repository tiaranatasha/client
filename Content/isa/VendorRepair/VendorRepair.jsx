import React from "react";
import { Link } from "react-router-dom";
import { Info, Database, Monitor, Server, Network, Briefcase, FolderTree, BookOpen, BarChartHorizontal, Folder } from "lucide-react";
import Sidebar, { SidebarItem } from "../../../components/Sidebar";
import Navbar from "../../../components/Navbar"; // Import Navbar
import NavbarItem from "../../../components/NavbarItem"; // Import Navbar
import Table from "../../../components/Table"; // Import Navbar
import TableRow from "../../../components/TableRow"; // Import Navbar
import TableHeader from "../../../components/TableHeader"; // Import Navbar
import TableCell from "../../../components/TableCell"; // Import Navbar


function VendorRepairComponent() {
  return (
    <>
      <div className="flex">
      <Sidebar>
          <Link to="/budget">
            <SidebarItem icon={<Database size={20} />} text="ISA" active />
          </Link>

          <Link to="/pc">
            <SidebarItem icon={<Monitor size={20} />} text="PC" />
          </Link>

          <Link to="/dc">
            <SidebarItem icon={<Server size={20} />} text="DC" />
          </Link>

          <Link to="/telnet">
            <SidebarItem icon={<Network size={20} />} text="Telnet" />
          </Link>

          <Link to="/project">
            <SidebarItem icon={<Briefcase size={20} />} text="Project" />
          </Link>

          <Link to="/cab">
            <SidebarItem icon={<FolderTree size={20} />} text="CAB" />
          </Link>

          <Link to="/sop_cp">
            <SidebarItem icon={<BookOpen size={20} />} text="SOP/CP" />
          </Link>

          <Link to="/SurveyFeedbackAveris">
            <SidebarItem icon={<BarChartHorizontal size={20} />} text="Survey Feedback Averis" />
          </Link>

          <Link to="/OtherDocuments">
            <SidebarItem icon={<Folder size={20} />} text="Other Documents" />
          </Link>

          <Link to="/help">
            <SidebarItem icon={<Info size={20} />} text="Help" />
          </Link>

          <hr className="my-3" />
        </Sidebar>

        <div className="flex-1 p-6 main-content">
        <Navbar>
            <Link to ="/budget"><NavbarItem>Budget</NavbarItem></Link>
            <Link to ="/kpi_pis"><NavbarItem>KPI/PIS</NavbarItem></Link>
            <Link to ="/audit"><NavbarItem>Audit</NavbarItem></Link>
            <Link to="/rfc_vendor"><NavbarItem>RFC Vendor</NavbarItem></Link>
            <Link to="/vendor_repair"><NavbarItem active={true}>Vendor Repair</NavbarItem></Link>
            <Link to="/microsoft"><NavbarItem>License</NavbarItem></Link>
            <Link to="/audit1"><NavbarItem>Audit 1</NavbarItem></Link>
            <Link to="/audit2"><NavbarItem>Audit 2</NavbarItem></Link>
          </Navbar>
          
          
          <div>
            <hr className="my-3" />
            <div className="container mx-auto mt-10">
              <Table>
                <TableHeader>
                  <TableCell>No</TableCell>
                  <TableCell>Repair Date</TableCell>
                  <TableCell>TIcket Number</TableCell>
                  <TableCell>Ageing</TableCell>
                  <TableCell>Engineer Name</TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell>BU's</TableCell>
                  <TableCell>Material Name</TableCell>
                  <TableCell>Brand</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Serial Number</TableCell>
                  <TableCell>Cost Center</TableCell>
                  <TableCell>PR Number</TableCell>
                  <TableCell>PO Number</TableCell>
                  <TableCell>Quotation Date</TableCell>
                  <TableCell>Cost Without</TableCell>
                  <TableCell>Status (Repair, Finished, Cancelled)</TableCell>
                  <TableCell>Vendor Delivery</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Created By Ses</TableCell>
                  <TableCell>Remarks</TableCell>
                </TableHeader>
                <tbody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>30</TableCell>
                    <TableCell>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>Jane Doe</TableCell>
                    <TableCell>25</TableCell>
                    <TableCell>
                      
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell> Doe</TableCell>
                    <TableCell>29</TableCell>
                    <TableCell>

                    </TableCell>
                  </TableRow>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VendorRepairComponent;

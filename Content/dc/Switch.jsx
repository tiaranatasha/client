import React from "react";
import { Link } from "react-router-dom";
import { Info, Database, Monitor, Server, Network, Briefcase, FolderTree, BookOpen, BarChartHorizontal, Folder } from "lucide-react";
import Sidebar, { SidebarItem } from "../../../components/Sidebar";
import Navbar from "../../../components/Navbar"; // Import Navbar
import NavbarItem from "../../../components/NavbarItem";
import ProfileCard from '../../../components/ProfileCard';

function SwitchComponent() {
  return (
    <>
      <div className="flex">
      <Sidebar>
          <Link to="/budget">
            <SidebarItem icon={<Database size={20} />} text="ISA" />
          </Link>

          <Link to="/pc">
            <SidebarItem icon={<Monitor size={20} />} text="PC" />
          </Link>

          <Link to="/dc">
            <SidebarItem icon={<Server size={20} />} text="DC" active />
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
            <Link to ="/dc_utility_equipment"><NavbarItem>DC Utility Equipment</NavbarItem></Link>
            <Link to ="/decom_server"><NavbarItem>Decom Server</NavbarItem></Link>
            <Link to ="/fiber_optik"><NavbarItem>Fiber Optik</NavbarItem></Link>
            <Link to="/firewall"><NavbarItem>Firewall</NavbarItem></Link>
            <Link to="/master"><NavbarItem>Master</NavbarItem></Link>
            <Link to="/monitoring_device"><NavbarItem>Monitoring Device</NavbarItem></Link>
            <Link to="/pmis"><NavbarItem>Pmis</NavbarItem></Link>
            <Link to="/router"><NavbarItem>Router</NavbarItem></Link>
            <Link to="/switch"><NavbarItem active={true}>Switch</NavbarItem></Link>
            <Link to="/server"><NavbarItem>Server</NavbarItem></Link>
            <Link to="/summary"><NavbarItem>Summary</NavbarItem></Link>
            <Link to="/tape_driver"><NavbarItem>Tape Driver</NavbarItem></Link>
            <Link to="/tape_library"><NavbarItem>Tape Library</NavbarItem></Link>
            <Link to="/security_device"><NavbarItem>Security Device</NavbarItem></Link>
            <Link to="/storage"><NavbarItem>Storage</NavbarItem></Link>
          </Navbar>
          <div>
            <br />
            <h1>hai</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default SwitchComponent;

import React from 'react';
import { Link } from 'react-router-dom';
import { Info, Database, Monitor, Server, Network, Briefcase, FolderTree, BookOpen, BarChartHorizontal, Folder } from "lucide-react";
import Sidebar, { SidebarItem } from "../../components/Sidebar";
import Navbar from "../../components/Navbar"; // Import Navbar
import ProfileCard from '../../components/ProfileCard';

function HelpComponent() {
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
            <SidebarItem icon={<Server size={20} />} text="DC" />
          </Link>

          <Link to="/telnet">
            <SidebarItem icon={<Network size={20} />} text="Telnet" />
          </Link>

          <Link to="/project">
            <SidebarItem icon={<Briefcase size={20} />} text="Project" />
          </Link>

          <Link to="/cab">
            <SidebarItem icon={<FolderTree size={20} />} text="CAB"/>
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
            <SidebarItem icon={<Info size={20} />} text="Help" active />
          </Link>

          <hr className="my-3" />
        </Sidebar>
        
        <div className="flex-1 p-6 main-content">
          <Navbar /> 
          <div className="content">
            <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
            <p className="mt-4">This is your main content area.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HelpComponent;

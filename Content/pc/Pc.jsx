import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Info,
  Database,
  Monitor,
  Server,
  Network,
  Briefcase,
  FolderTree,
  BookOpen,
  BarChartHorizontal,
  Folder,
  Pencil,
  Trash2,
} from "lucide-react";
import Sidebar, { SidebarItem } from "../../components/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import Table from "../../components/Table";
import TableRow from "../../components/TableRow";
import TableHeader from "../../components/TableHeader";
import TableCell from "../../components/TableCell";
import ProfileCard from "../../components/ProfileCard";
import Swal from "sweetalert2"; // Import SweetAlert

const PcComponent = () => {
  const [pcs, setPCs] = useState([]);
  const [isFormVisible, setFormVisible] = useState(false);
  const [form, setForm] = useState({
    id: "",
    it_code: "",
    brand: "",
    serial_number: "",
    ip_address: "",
    mac_address: "",
    host_name: "",
    location: "",
    business_unit: "",
    department: "",
    username: "",
    status: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDeleteSuccess, setIsDeleteSuccess] = useState(false);
  const [isEditSuccess, setIsEditSuccess] = useState(false);
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPCs();
    fetchProfile();
  }, []);

  const fetchPCs = async () => {
    try {
      const response = await axios.get("http://localhost:3001/pc");
      setPCs(response.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const response = await axios.get("http://localhost:3001/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfile(response.data);
    } catch (err) {
      console.error("Failed to fetch profile:", err);
    }
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !form.it_code ||
      !form.brand ||
      !form.serial_number ||
      !form.ip_address ||
      !form.mac_address ||
      !form.host_name ||
      !form.location ||
      !form.business_unit ||
      !form.department ||
      !form.username ||
      !form.status
    ) {
      showAlert("Please fill in all fields before submitting.");
      return;
    }

    try {
      if (form.id) {
        await axios.put(`http://localhost:3001/pc/${form.id}`, form);
        showAlert("PC updated successfully!", "success"); // Ganti alert dengan SweetAlert
        setIsEditSuccess(true);
        setTimeout(() => setIsEditSuccess(false), 3000);
      } else {
        await axios.post("http://localhost:3001/pc", form);
        showAlert("PC added successfully!", "success"); // Ganti alert dengan SweetAlert
      }
      setForm({
        id: "",
        it_code: "",
        brand: "",
        serial_number: "",
        ip_address: "",
        mac_address: "",
        host_name: "",
        location: "",
        business_unit: "",
        department: "",
        username: "",
        status: "",
      });
      fetchPCs();
      setFormVisible(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleEdit = (pc) => {
    setForm(pc);
    setFormVisible(true);
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Confirmation",
      text: "Are you sure you want to delete this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:3001/pc/${id}`);
        Swal.fire({
          title: "Delete!",
          text: "PC removed successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
        fetchPCs();
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  const showAlert = (message, iconType = "warning") => {
    // Tambahkan parameter iconType
    Swal.fire({
      title: iconType === "success" ? "Success" : "Warning", // Ubah judul berdasarkan iconType
      text: message,
      icon: iconType, // Gunakan iconType untuk menentukan ikon
      confirmButtonText: "OK",
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/"); // Arahkan pengguna ke halaman LoginForm
  };

  const pcsFiltered = pcs.filter(
    (pc) =>
      pc.it_code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pc.ip_address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pc.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pc.serial_number.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex">
        <Sidebar>
          <Link to="/budget">
            <SidebarItem icon={<Database size={20} />} text="ISA" />
          </Link>

          <Link to="/pc">
            <SidebarItem icon={<Monitor size={20} />} text="PC" active />
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
            <SidebarItem
              icon={<BarChartHorizontal size={20} />}
              text="Survey Feedback Averis"
            />
          </Link>

          <Link to="/OtherDocuments">
            <SidebarItem icon={<Folder size={20} />} text="Other Documents" />
          </Link>

          <Link to="/help">
            <SidebarItem icon={<Info size={20} />} text="Help" />
          </Link>

          <hr className="my-3" />
        </Sidebar>

        <div className="flex-1 p-6 overflow-x-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="relative w-full max-w-sm">
              <input
                type="search"
                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && ( // Menampilkan ikon hanya jika ada input
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute text-gray-500 transform -translate-y-1/2 right-2 top-1/2 hover:text-gray-700"
                >
                  ✖️
                </button>
              )}
            </div>
            <button
              onClick={toggleForm}
              className="px-4 py-2 ml-4 text-white transition duration-200 ease-in-out bg-blue-500 rounded-md hover:bg-blue-700"
            >
              Add PC
            </button>
          </div>

          {isFormVisible && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="max-w-5xl p-8 mx-2 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-md">
                <h2 className="mb-2 text-lg font-semibold text-center">
                  {form.id ? "Edit PC" : "Add New PC"}
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-3 gap-4"
                >
                  <div>
                    <label
                      htmlFor="it_code"
                      className="block mb-1 font-medium text-gray-700"
                    >
                      IT Code
                    </label>
                    <input
                      type="text"
                      id="it_code"
                      name="it_code"
                      placeholder="IT Code"
                      className="w-full p-1 border border-gray-300 rounded-md"
                      value={form.it_code}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="brand"
                      className="block mb-1 font-medium text-gray-700"
                    >
                      Brand
                    </label>
                    <input
                      type="text"
                      id="brand"
                      name="brand"
                      placeholder="Brand"
                      className="w-full p-1 border border-gray-300 rounded-md"
                      value={form.brand}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="serial_number"
                      className="block mb-1 font-medium text-gray-700"
                    >
                      Serial Number
                    </label>
                    <input
                      type="text"
                      id="serial_number"
                      name="serial_number"
                      placeholder="Serial Number"
                      className="w-full p-1 border border-gray-300 rounded-md"
                      value={form.serial_number}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="ip_address"
                      className="block mb-1 font-medium text-gray-700"
                    >
                      IP Address
                    </label>
                    <input
                      type="text"
                      id="ip_address"
                      name="ip_address"
                      placeholder="IP Address"
                      className="w-full p-1 border border-gray-300 rounded-md"
                      value={form.ip_address}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="mac_address"
                      className="block mb-1 font-medium text-gray-700"
                    >
                      Mac Address
                    </label>
                    <input
                      type="text"
                      id="mac_address"
                      name="mac_address"
                      placeholder="Mac Address"
                      className="w-full p-1 border border-gray-300 rounded-md"
                      value={form.mac_address}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="host_name"
                      className="block mb-1 font-medium text-gray-700"
                    >
                      Host Name
                    </label>
                    <input
                      type="text"
                      id="host_name"
                      name="host_name"
                      placeholder="Host Name"
                      className="w-full p-1 border border-gray-300 rounded-md"
                      value={form.host_name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="location"
                      className="block mb-1 font-medium text-gray-700"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      placeholder="Location"
                      className="w-full p-1 border border-gray-300 rounded-md"
                      value={form.location}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="business_unit"
                      className="block mb-1 font-medium text-gray-700"
                    >
                      Business Unit
                    </label>
                    <input
                      type="text"
                      id="business_unit"
                      name="business_unit"
                      placeholder="Business Unit"
                      className="w-full p-1 border border-gray-300 rounded-md"
                      value={form.business_unit}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="department"
                      className="block mb-1 font-medium text-gray-700"
                    >
                      Department
                    </label>
                    <input
                      type="text"
                      id="department"
                      name="department"
                      placeholder="Department"
                      className="w-full p-1 border border-gray-300 rounded-md"
                      value={form.department}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="username"
                      className="block mb-1 font-medium text-gray-700"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Username"
                      className="w-full p-1 border border-gray-300 rounded-md"
                      value={form.username}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="status"
                      className="block mb-1 font-medium text-gray-700"
                    >
                      Status
                    </label>
                    <select
                      id="status"
                      name="status"
                      className="w-full p-1 border border-gray-300 rounded-md"
                      value={form.status}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Status</option>
                      <option value="OK">OK</option>
                      <option value="SCRAP">SCRAP</option>
                    </select>
                  </div>

                  <div className="flex justify-end col-span-3 mt-4 space-x-4">
                    <button
                      type="submit"
                      className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                    >
                      Save
                    </button>
                    <button onClick={toggleForm} className="text-red-500">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          <Table>
            <TableHeader>
              <TableCell>No</TableCell>
              <TableCell>IT Code</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Serial Number</TableCell>
              <TableCell>IP Address</TableCell>
              <TableCell>Mac Addres</TableCell>
              <TableCell>Host Name</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Business Unit</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableHeader>

            {pcsFiltered.map((pc, index) => (
              <TableRow key={pc.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{pc.it_code}</TableCell>
                <TableCell>{pc.brand}</TableCell>
                <TableCell>{pc.serial_number}</TableCell>
                <TableCell>{pc.ip_address}</TableCell>
                <TableCell>{pc.mac_address}</TableCell>
                <TableCell>{pc.host_name}</TableCell>
                <TableCell>{pc.location}</TableCell>
                <TableCell>{pc.business_unit}</TableCell>
                <TableCell>{pc.department}</TableCell>
                <TableCell>{pc.username}</TableCell>
                <TableCell>{pc.status}</TableCell>
                <TableCell>
                  <div className="flex space-x-1">
                    {" "}
                    {/* Menambahkan div dengan flexbox */}
                    <button
                      onClick={() => handleEdit(pc)}
                      className="px-2 py-1 text-white transition duration-300 ease-in-out transform bg-blue-500 rounded-md hover:bg-blue-700 hover:shadow-lg hover:scale-105"
                    >
                      <Pencil size={16} strokeWidth={1} />
                    </button>
                    <button
                      onClick={() => handleDelete(pc.id)}
                      className="px-2 py-1 text-white transition duration-300 ease-in-out transform bg-red-500 rounded-md hover:bg-red-700 hover:shadow-lg hover:scale-105"
                    >
                      <Trash2 size={16} strokeWidth={1} />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </div>
      </div>
    </>
  );
};

export default PcComponent;

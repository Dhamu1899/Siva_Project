import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const departments = [
  "Chief Minister Cell",
  "Waste Management",
  "Water Logging",
  "Road Conditions",
  "Street Lighting",
  "Sewage Overflow",
  "Encroachments",
  "Pollution",
];

const locations = {
  "Tamil Nadu": {
    "Chennai": [
      "Chennai City",
      "Ambattur",
      "Anna Nagar",
      "Adyar",
      "Madhavaram",
      "Pallavaram",
      "Tambaram",
      "Perungudi",
      "Perambur",
      "Nungambakkam"
    ],
    "Coimbatore": [
      "Coimbatore City",
      "Gandhipuram",
      "R S 2nd Street",
      "Ganapathy",
      "Peelamedu",
      "Tidel Park",
      "Saravanampatti",
      "Tidel Park",
      "Podanur"
    ],
    "Madurai": [
      "Madurai City",
      "Simmakkal",
      "Thirupparankundram",
      "Koodal Nagar",
      "Tallakulam",
      "Meenakshi Amman Temple",
      "Palanganatham",
      "Muthusamy Pillai",
      "MGR Nagar"
    ],
    "Salem": [
      "Salem City",
      "Fairlands",
      "Omalur",
      "Yercaud",
      "Mettur",
      "Ayodhiyapattinam",
      "Sankari",
      "Namakkal",
      "Kottai",
      "Vazhapadi"
    ],
    "Trichy": [
      "Tiruchirappalli",
      "Srirangam",
      "Tidel Park",
      "Thiruverumbur",
      "Samayapuram",
      "Kottai",
      "Uppiliyappan",
      "Thuvakudi",
      "Vayalur"
    ],
    "Vellore": [
      "Vellore City",
      "Katpadi",
      "Sathuvachari",
      "Arakkonam",
      "Pudupalayam",
      "Alangayam",
      "Gudiyattam",
      "Ambur",
      "Kaveripakkam"
    ],
    "Tirunelveli": [
      "Tirunelveli City",
      "Palayamkottai",
      "Vannarapettai",
      "Tenkasi",
      "Shencottah",
      "Ambasamudram",
      "Nazareth",
      "Sankarankoil",
      "Courtallam"
    ],
    "Erode": [
      "Erode City",
      "Perundurai",
      "Chennimalai",
      "Modakurichi",
      "Vellakinar",
      "Vedanayagam",
      "Bhavani",
      "Kodumudi",
      "Sathyamangalam"
    ],
    "Kanchipuram": [
      "Kanchipuram City",
      "Cheyyur",
      "Uthiramerur",
      "Orathur",
      "Sriperumbudur",
      "Pallavaram",
      "Gandhinagar",
      "Perungalathur",
      "Madhurandhagam"
    ],
    "Dindigul": [
      "Dindigul City",
      "Nilakottai",
      "Vedasandur",
      "Kodaikanal",
      "Oddanchatram",
      "Reddiyarchatram",
      "Athoor",
      "Batlagundu",
      "Pillayarpatti"
    ],
    "Tiruvarur": [
      "Tiruvarur City",
      "Mannargudi",
      "Kollidam",
      "Muthupettai",
      "Thiruthuraipoondi",
      "Kuthalam",
      "Pattukkottai",
      "Valangaiman"
    ],
    "Tiruvannamalai": [
      "Tiruvannamalai City",
      "Arani",
      "Cheyyar",
      "Polur",
      "Kanchipuram",
      "Thiruvallur",
      "Vandavasi",
      "Pudupalayam",
      "Chengam"
    ],
    "Thoothukudi": [
      "Thoothukudi City",
      "Kovilpatti",
      "Tiruchendur",
      "Eral",
      "Sattankulam",
      "Vallioor",
      "Kayalpattinam",
      "Kulasekarapattinam",
      "Kayalpatnam"
    ],
    "Villupuram": [
      "Villupuram City",
      "Kallakurichi",
      "Nellikuppam",
      "Bargur",
      "Mettur",
      "Cuddalore",
      "Kattumannarkoil",
      "Gingee",
      "Tindivanam"
    ],
    "Nagapattinam": [
      "Nagapattinam City",
      "Sirkali",
      "Vedaranyam",
      "Thiruthuraipoondi",
      "Kothamangalam",
      "Muthupettai",
      "Thalainayar",
      "Marakkanam"
    ],
    "Cuddalore": [
      "Cuddalore City",
      "Port Novo",
      "Chidambaram",
      "Veppathur",
      "Kurinjipadi",
      "Parangipettai",
      "Vadalur",
      "Bhuvanagiri"
    ],
    "Krishnagiri": [
      "Krishnagiri City",
      "Hosur",
      "Berigai",
      "Sankari",
      "Rayakottai",
      "Pochampalli",
      "Thally",
      "Mettur"
    ],
    "Pudukkottai": [
      "Pudukkottai City",
      "Aranthangi",
      "Karaikudi",
      "Alangudi",
      "Ilayankudi",
      "Viralimalai",
      "Sivagangai",
      "Perungudi"
    ],
    "Namakkal": [
      "Namakkal City",
      "Rasipuram",
      "Tiruchengode",
      "Sendamangalam",
      "Paramathi",
      "Pachamalai",
      "Pallipalayam",
      "Tiruchengode"
    ],
    "Ramanathapuram": [
      "Ramanathapuram City",
      "Rameswaram",
      "Kadaladi",
      "Sathankulam",
      "Paramakudi",
      "Thiruppullani",
      "Devipattinam",
      "Muthuramalingapuram"
    ],
    "Sivagangai": [
      "Sivagangai City",
      "Karaikudi",
      "Devakottai",
      "Manamadurai",
      "Sivaganga",
      "Puduvayal",
      "Sivaganga East"
    ],
    "Puducherry": [
      "Puducherry City",
      "Ariyankuppam",
      "Odiampet",
      "Villianur",
      "Muthialpet",
      "Yanam",
      "Karaikal"
    ],
    "Tirupur": [
      "Tirupur City",
      "Uthukuli",
      "Avinashi",
      "Palladam",
      "Kangayam",
      "Thennilai",
      "Tirupur East"
    ],
    "Virdhachalam": [
      "Virdhachalam City",
      "Uttarakosamangai",
      "Chidambaram",
      "Panruti",
      "Cuddalore"
    ],
    "Perambalur": [
      "Perambalur City",
      "Veppanthattai",
      "Ariyalur",
      "Tittakudi",
      "Kottur"
    ],
    "Ariyalur": [
      "Ariyalur City",
      "Sendurai",
      "Jayankondam",
      "Sankarapuram",
      "Veppur"
    ],
    "Karur": [
      "Karur City",
      "Krishnarayapuram",
      "Koodalur",
      "Dindigul",
      "Kangeyam"
    ],
    "Tirupathur": [
      "Tirupathur City",
      "Natrampalli",
      "Vaniyambadi",
      "Ambur",
      "Jolarpet"
    ],
    "Sankari": [
      "Sankari City",
      "Sankari North",
      "Veerapandi",
      "Sivagiri",
      "Sankari East"
    ]
  }
};

function DepartmentLogin({ onLogin }) {
  const [formData, setFormData] = useState({
    department: "",
    state: "",
    district: "",
    city: "",
    username: "",
    password: "",
  });

  const [districts, setDistricts] = useState([]);
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setFormData((prev) => ({ ...prev, state: selectedState, district: "", city: "" }));
    setDistricts(Object.keys(locations[selectedState] || {}));
    setCities([]);
  };

  const handleDistrictChange = (e) => {
    const selectedDistrict = e.target.value;
    setFormData((prev) => ({ ...prev, district: selectedDistrict, city: "" }));
    setCities(locations[formData.state][selectedDistrict] || []);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Default admin credentials
    const defaultAdminCredentials = {
      username: "admin",
      password: "admin",
    };
  
    // Validate form input
    if (!formData.department || !formData.state || !formData.district || !formData.city) {
      alert("Please select all fields before proceeding.");
      return;
    }
  
    // Check for correct credentials
    if (
      formData.username === defaultAdminCredentials.username &&
      formData.password === defaultAdminCredentials.password
    ) {
      alert("Login Successful!");
      onLogin({ ...formData, username: formData.username, role: "department" });
      navigate("/department-dashboard", { state: { filters: formData } });
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-grow container mx-auto px-6 py-8">
        <h2 className="text-xl font-semibold text-center mb-8">
          WELCOME TO PUBLIC GRIEVANCE SYSTEM
        </h2>

        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow">
          <h3 className="text-2xl font-semibold mb-6 text-center">Department Login</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="department" className="block font-medium mb-2">
                Select Department Name:
              </label>
              <select
                id="department"
                value={formData.department}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, department: e.target.value }))
                }
                className="border rounded w-full px-3 py-2"
              >
                <option value="" disabled>
                  Select Department
                </option>
                {departments.map((dept, index) => (
                  <option key={index} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="state" className="block font-medium mb-2">
                Select State:
              </label>
              <select
                id="state"
                value={formData.state}
                onChange={handleStateChange}
                className="border rounded w-full px-3 py-2"
              >
                <option value="" disabled>
                  Select State
                </option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                {/* Add more states here */}
              </select>
            </div>

            <div>
              <label htmlFor="district" className="block font-medium mb-2">
                Select District:
              </label>
              <select
                id="district"
                value={formData.district}
                onChange={handleDistrictChange}
                disabled={!formData.state}
                className="border rounded w-full px-3 py-2"
              >
                <option value="" disabled>
                  Select District
                </option>
                {districts.map((district, index) => (
                  <option key={index} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="city" className="block font-medium mb-2">
                Select City:
              </label>
              <select
                id="city"
                value={formData.city}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, city: e.target.value }))
                }
                disabled={!formData.district}
                className="border rounded w-full px-3 py-2"
              >
                <option value="" disabled>
                  Select City
                </option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="username" className="block font-medium mb-2">
                Enter Username:
              </label>
              <input
                id="username"
                type="text"
                value={formData.username}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, username: e.target.value }))
                }
                className="border rounded w-full px-3 py-2"
              />
            </div>

            <div>
              <label htmlFor="password" className="block font-medium mb-2">
                Enter Password:
              </label>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, password: e.target.value }))
                }
                className="border rounded w-full px-3 py-2"
              />
            </div>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
              Login
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default DepartmentLogin;
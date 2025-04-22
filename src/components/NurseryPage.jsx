import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Import Leaflet icon assets
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix Leaflet default icon issue
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const NurseryPage = () => {
  const [nurseriesToShow, setNurseriesToShow] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', text: "Hello! I'm your AI assistant. How can I help you today?" }
  ]);
  const [userInput, setUserInput] = useState('');
  const chatMessagesRef = useRef(null);
  const userMarkerRef = useRef(null);
  const mapRef = useRef(null);

  // Nursery data
  const nurseries = [
    {
      id: 1,
      name: "Hamara Maali (Unit Of Heritage India) - RAKPLAM LEAVES",
      location: "Greater Noida, Greater Noida",
      rating: 4.6,
      ratingsCount: 71,
      specialties: ["Terrace Gardening", "Plant Nurseries"],
      image: "/public/images/hamara.jpg",
      coordinates: [28.4595, 77.5266],
      mapUrl: "https://maps.app.goo.gl/fZqoQbN6W3Exp6qC7"
    },
    {
      id: 2,
      name: "Plant Mitra Nursery",
      location: "Beta -1st, Greater Noida",
      rating: 5.0,
      ratingsCount: 4,
      specialties: ["Plant Nurseries", "Flower Pot Dealers"],
      image: "./public/images/plantmitra.jpg",
      coordinates: [28.467611, 77.512030]
    },
    {
      id: 3,
      name: "The Green Creen",
      location: "Green Organic Bagicha, Khanpur Village Near Sirsa Gol Chakker, Greater Noida",
      rating: 4.6,
      ratingsCount: 4,
      specialties: ["Organic Plants", "Indoor Plants"],
      image: "public/images/greencreen.jpg",
      coordinates: [28.42431777527591, 77.57430747237467]
    },
    {
      id: 4,
      name: "Balaji Nursery",
      location: "Chorisia Speciosa Estate, Phi III, Greater Noida",
      rating: 4.6,
      ratingsCount: 73,
      specialties: ["Exotic Plants", "Succulents"],
      image: "public/images/balaji.jpg",
      coordinates: [28.448007814681773, 77.52779126716199]
    }
  ];

  useEffect(() => {
    setNurseriesToShow(nurseries);
  }, []);

  useEffect(() => {
    // Scroll to bottom of chat when new messages are added
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = nurseries.filter(nursery => 
      nursery.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      nursery.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      nursery.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    setNurseriesToShow(filtered);
  };

  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c; // Distance in km
  };

  const openMap = (location) => {
    if (typeof location === 'string') {
      window.open(location, "_blank");
    } else {
      window.open(`https://www.google.com/maps/search/?api=1&query=${location[0]},${location[1]}`, "_blank");
    }
  };

  const handleChatSend = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    // Add user message
    setChatMessages([...chatMessages, { type: 'user', text: userInput }]);
    setUserInput('');

    // Simulate bot response (in a real app, this would call an API)
    setTimeout(() => {
      setChatMessages(prev => [...prev, { 
        type: 'bot', 
        text: "I'm sorry, I'm just a demo chatbot. How else can I help you with finding plants or nurseries?" 
      }]);
    }, 1000);
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          
          // Sort nurseries by distance
          const nurseriesWithDistance = nurseries.map(nursery => {
            const distance = getDistance(
              userLat, userLng,
              nursery.coordinates[0], nursery.coordinates[1]
            );
            return { ...nursery, distance };
          });
          
          nurseriesWithDistance.sort((a, b) => a.distance - b.distance);
          setNurseriesToShow(nurseriesWithDistance);
          
          // Update the map view and set user marker
          if (mapRef.current) {
            mapRef.current.setView([userLat, userLng], 14);
            
            // Remove existing user marker if any
            if (userMarkerRef.current) {
              userMarkerRef.current.remove();
            }
            
            // Create new user marker
            const userIcon = L.divIcon({
              className: 'user-location-icon',
              html: '<i class="fas fa-map-marker-alt text-blue-500 text-2xl"></i>',
              iconSize: [24, 24],
              iconAnchor: [12, 24]
            });
            
            userMarkerRef.current = L.marker([userLat, userLng], { icon: userIcon })
              .addTo(mapRef.current)
              .bindPopup("Your Location")
              .openPopup();
          }
        },
        error => {
          alert("Error getting your location: " + error.message);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  // Custom component to access the Leaflet map instance
  const MapController = ({ setMapRef }) => {
    const map = useMap();
    useEffect(() => {
      setMapRef(map);
    }, [map, setMapRef]);
    return null;
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header Section */}
      <header className="w-full bg-green-600 text-white text-sm">
        <div className="flex justify-between items-center p-1 flex-wrap">
          <div className="header-info">
            <span className="mr-4 whitespace-nowrap"><i className="fas fa-map-marker-alt"></i> Bennett University, Greater Noida, PIN - 201310</span>
            <span className="mr-4 whitespace-nowrap"><i className="fas fa-envelope"></i> projectayush007@gmail.com</span>
            <span className="mr-4 whitespace-nowrap"><i className="fas fa-phone-alt"></i> +91-8368570100</span>
          </div>
          <div className="header-icons">
            <a href="https://www.facebook.com/profile.php?id=61574951247607" className="text-white ml-2 text-base"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white ml-2 text-base"><i className="fab fa-instagram"></i></a>
            <a href="www.linkedin.com/in/ayush-project-743546359" className="text-white ml-2 text-base"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.youtube.com/channel/UCnNFon3CLF8_PdKxxcJH2PQ" className="text-white ml-2 text-base"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="flex items-center p-4 bg-white">
          <div className="flex flex-col items-center p-2 border-3 border-green-600 rounded-lg mx-auto">
            <h1 className="text-2xl text-green-600 m-0">AYUSH</h1>
            <p className="text-sm text-gray-600 m-0">The Virtual Herbal Garden</p>
          </div>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-1">
        <div className="w-11/12 mx-auto py-5">
          <div className="flex gap-4 mb-5 flex-wrap">
            <form onSubmit={handleSearch} className="flex-1 flex min-w-64">
              <input 
                type="text" 
                placeholder="Search nurseries..." 
                className="flex-1 py-2 px-4 border border-gray-300 rounded-l-md text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit"
                className="py-2 px-4 bg-green-600 text-white rounded-r-md cursor-pointer"
              >
                <i className="fas fa-search"></i>
              </button>
            </form>
            <button 
              onClick={getUserLocation}
              className="py-2 px-4 bg-blue-600 text-white rounded-md cursor-pointer flex items-center gap-1"
            >
              <i className="fas fa-location-arrow"></i> Use My Location
            </button>
          </div>
          
          <h1 className="text-green-600 my-5">Nearby Nurseries</h1>
          <div className="flex flex-col gap-5 my-5">
            {nurseriesToShow.map((nursery) => (
              <div key={nursery.id} className="flex bg-gray-50 p-4 rounded-lg shadow flex-wrap">
                <img 
                  src={nursery.image} 
                  alt={nursery.name} 
                  onError={(e) => {e.target.src = 'images/placeholder.jpg'}}
                  className="w-36 h-36 object-cover rounded-lg mr-4"
                />
                <div className="flex-1 min-w-50">
                  <h3 className="m-0 mb-2 text-green-900">{nursery.name}</h3>
                  <p className="my-1 text-gray-600"><i className="fas fa-map-marker-alt"></i> {nursery.location}</p>
                  <span className="inline-block bg-green-600 text-white px-2 py-1 rounded font-bold">
                    ⭐ {nursery.rating} ({nursery.ratingsCount} Ratings)
                  </span>
                  <p className="my-1 text-gray-600">
                    Specialties: {nursery.specialties.map(specialty => (
                      <span key={specialty} className="inline-block bg-gray-200 p-1 m-1 rounded text-xs">{specialty}</span>
                    ))}
                  </p>
                  <button className="border-none py-2 px-4 m-1 rounded cursor-pointer text-sm bg-green-500 text-white">
                    <i className="fab fa-whatsapp"></i> WhatsApp
                  </button>
                  <button 
                    onClick={() => openMap(nursery.mapUrl || nursery.coordinates)}
                    className="border-none py-2 px-4 m-1 rounded cursor-pointer text-sm bg-blue-500 text-white"
                  >
                    View on Map
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="h-96 w-full mt-5 rounded-lg shadow">
            <MapContainer 
              center={[28.4595, 77.5266]} 
              zoom={13} 
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <MapController setMapRef={(map) => { mapRef.current = map; }} />
              {nurseriesToShow.map((nursery) => (
                <Marker key={nursery.id} position={nursery.coordinates}>
                  <Popup>{nursery.name}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center text-sm mt-auto">
        <p>© 2025 Virtual Herbal Garden | <a href="privacy policy.html" className="text-green-500 no-underline">Terms and Conditions & Privacy Policy</a> | <a href="contact.html" className="text-green-500 no-underline">Contact Us</a></p>
      </footer>

      {/* Chatbot */}
      <div className="fixed bottom-5 right-5 z-50">
        <button 
          onClick={() => setIsChatbotOpen(!isChatbotOpen)} 
          className="w-14 h-14 rounded-full bg-green-600 text-white border-none text-2xl cursor-pointer shadow-lg transition-all duration-300 flex justify-center items-center hover:bg-green-700 hover:scale-110"
        >
          <i className="fas fa-comment-dots"></i>
        </button>
        
        {isChatbotOpen && (
          <div className="absolute bottom-16 right-0 w-72 h-96 bg-green-50 rounded-lg shadow-lg flex flex-col overflow-hidden">
            <div className="bg-green-600 text-white p-2 flex justify-between items-center">
              <h3 className="m-0 text-base">Vinayak</h3>
              <button 
                onClick={() => setIsChatbotOpen(false)} 
                className="bg-transparent border-none text-white text-base cursor-pointer"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-2" ref={chatMessagesRef}>
              {chatMessages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`max-w-4/5 p-2 rounded-xl text-sm ${
                    msg.type === 'bot' 
                      ? 'bg-green-200 self-start' 
                      : 'bg-green-300 self-end'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            
            <form onSubmit={handleChatSend} className="flex p-2 bg-green-100">
              <input 
                type="text" 
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your message..." 
                className="flex-1 p-2 border border-gray-300 rounded-full outline-none"
              />
              <button 
                type="submit"
                className="bg-green-600 text-white border-none rounded-full w-9 h-9 ml-2 cursor-pointer flex justify-center items-center"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default NurseryPage;
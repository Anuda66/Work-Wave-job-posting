import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function CVBuilder() {
  const { userData, setUserData } = useContext(AppContext);
  const [activeSection, setActiveSection] = useState("personal");
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleInputChange = (section, field, value) => {
    setUserData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
        setUserData(prev => ({
          ...prev,
          personal: {
            ...prev.personal,
            photo: reader.result
          }
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const downloadPDF = () => {
    const input = document.getElementById('cv-preview');
    html2canvas(input, { scale: 2 }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save("software_engineer_cv.pdf");
    });
  };

  return (
    <div className="flex flex-col min-h-screen gap-8 p-6 md:flex-row bg-gray-50">
      {/* Input Form */}
      <div className="w-full space-y-6 md:w-1/3">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-bold text-purple-600">CV Builder</h2>

          {/* Navigation */}
          <div className="flex gap-2 mb-6 overflow-x-auto">
            {['personal', 'education', 'experience', 'skills'].map(section => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded-full capitalize ${activeSection === section
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                  }`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Form Sections */}
          <div className="space-y-6">

            {/* Personal Details */}
            {activeSection === 'personal' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700">Personal Details</h3>
                {/* Profile Photo Upload */}
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Profile Photo
                  </label>
                  <div className="flex items-center gap-4">
                    <label className="cursor-pointer">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                      <div className="flex items-center justify-center w-20 h-20 transition-colors bg-gray-100 rounded-full hover:bg-gray-200">
                        {profilePhoto ? (
                          <img
                            src={profilePhoto}
                            alt="Profile"
                            className="object-cover w-20 h-20 rounded-full"
                          />
                        ) : (
                          <svg
                            className="w-8 h-8 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        )}
                      </div>
                    </label>
                    <div className="text-sm text-gray-600">
                      <p>Click to upload a photo</p>
                      <p className="text-xs text-gray-500">JPEG, PNG (max 2MB)</p>
                    </div>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={userData.personal?.name || ''}
                  onChange={(e) => handleInputChange('personal', 'name', e.target.value)}
                  className="w-full p-2 border rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={userData.personal?.email || ''}
                  className="w-full p-2 border rounded-lg"
                  onChange={(e) => handleInputChange('personal', 'email', e.target.value)}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={userData.personal?.phone || ''}
                  className="w-full p-2 border rounded-lg"
                  onChange={(e) => handleInputChange('personal', 'phone', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={userData.personal?.location || ''}
                  className="w-full p-2 border rounded-lg"
                  onChange={(e) => handleInputChange('personal', 'location', e.target.value)}
                />
                <textarea
                  placeholder="Professional Summary"
                  value={userData.personal?.summary || ''}
                  className="w-full h-32 p-2 border rounded-lg"
                  onChange={(e) => handleInputChange('personal', 'summary', e.target.value)}
                />
              </div>
            )}

            {/* Education */}
            {activeSection === 'education' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700">Education</h3>
                <textarea
                  placeholder="Degree and University (e.g., BSc Computer Science - MIT)"
                  value={userData.education?.details || ''}
                  className="w-full h-32 p-2 border rounded-lg"
                  onChange={(e) => handleInputChange('education', 'details', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Graduation Year"
                  value={userData.education?.year || ''}
                  className="w-full p-2 border rounded-lg"
                  onChange={(e) => handleInputChange('education', 'year', e.target.value)}
                />
              </div>
            )}

            {/* Work Experience */}
            {activeSection === 'experience' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700">Work Experience</h3>
                <textarea
                  placeholder="Job Title and Company (e.g., Senior Software Engineer - Google)"
                  value={userData.experience?.current || ''}
                  className="w-full h-32 p-2 border rounded-lg"
                  onChange={(e) => handleInputChange('experience', 'current', e.target.value)}
                />
                <textarea
                  placeholder="Previous Experience"
                  value={userData.experience?.previous || ''}
                  className="w-full h-32 p-2 border rounded-lg"
                  onChange={(e) => handleInputChange('experience', 'previous', e.target.value)}
                />
              </div>
            )}

            {/* Technical Skills */}
            {activeSection === 'skills' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700">Technical Skills</h3>
                <textarea
                  placeholder="Programming Languages (comma separated)"
                  value={userData.skills?.languages || ''}
                  className="w-full h-24 p-2 border rounded-lg"
                  onChange={(e) => handleInputChange('skills', 'languages', e.target.value)}
                />
                <textarea
                  placeholder="Frameworks & Libraries"
                  value={userData.skills?.frameworks || ''}
                  className="w-full h-24 p-2 border rounded-lg"
                  onChange={(e) => handleInputChange('skills', 'frameworks', e.target.value)}
                />
                <textarea
                  placeholder="Tools & Technologies"
                  value={userData.skills?.tools || ''}
                  className="w-full h-24 p-2 border rounded-lg"
                  onChange={(e) => handleInputChange('skills', 'tools', e.target.value)}
                />
              </div>
            )}
          </div>
        </div>

        <button
          onClick={downloadPDF}
          className="w-full py-3 text-white transition-colors bg-purple-600 rounded-lg hover:bg-purple-700"
        >
          Download PDF
        </button>
      </div>

      {/* CV Preview */}
      <div id="cv-preview" className="w-full p-8 bg-white rounded-lg shadow-md md:w-2/3">
        <header className="mb-8">
        <div className="flex flex-row items-center mb-4 space-x-4">
        {userData.personal?.photo && (
            <img
              src={userData.personal.photo}
              alt="Profile"
              className="object-cover w-24 h-24 border-4 border-purple-100 rounded-full"
            />
          )}
        
        </div>
          <h1 className="text-3xl font-bold text-gray-800">
            {userData.personal?.name || "Your Name"}
          </h1>
          <div className="flex flex-wrap gap-4 mt-2 text-gray-600">
            <p>{userData.personal?.email || "email@example.com"}</p>
            <p>{userData.personal?.phone || "+123 456 7890"}</p>
            <p>{userData.personal?.location || "City, Country"}</p>
          </div>
        </header>

        {/* Professional Summary */}
        
        {userData.personal?.summary && (
          <section className="mb-6">
            <h2 className="mb-2 text-xl font-semibold text-purple-600">Profile</h2>
            <p className="leading-relaxed text-gray-700">
              {userData.personal.summary}
            </p>
          </section>
        )}

        {/* Education */}
        {userData.education?.details && (
          <section className="mb-6">
            <h2 className="mb-2 text-xl font-semibold text-purple-600">Education</h2>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-800">
                {userData.education.details}
              </h3>
              {userData.education.year && (
                <p className="text-gray-600">{userData.education.year}</p>
              )}
            </div>
          </section>
        )}

        {/* Work Experience */}
        {(userData.experience?.current || userData.experience?.previous) && (
          <section className="mb-6">
            <h2 className="mb-2 text-xl font-semibold text-purple-600">Experience</h2>
            {userData.experience?.current && (
              <div className="mb-4">
                <h3 className="font-semibold text-gray-800">Current Position</h3>
                <p className="text-gray-700 whitespace-pre-wrap">
                  {userData.experience.current}
                </p>
              </div>
            )}
            {userData.experience?.previous && (
              <div>
                <h3 className="font-semibold text-gray-800">Previous Experience</h3>
                <p className="text-gray-700 whitespace-pre-wrap">
                  {userData.experience.previous}
                </p>
              </div>
            )}
          </section>
        )}

        {/* Technical Skills */}
        {(userData.skills?.languages || userData.skills?.frameworks || userData.skills?.tools) && (
          <section className="mb-6">
            <h2 className="mb-2 text-xl font-semibold text-purple-600">Technical Skills</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {userData.skills?.languages && (
                <div>
                  <h3 className="mb-2 font-semibold text-gray-800">Languages</h3>
                  <ul className="space-y-1 list-disc list-inside">
                    {userData.skills.languages.split(',').map((lang, index) => (
                      <li key={index} className="text-gray-700">{lang.trim()}</li>
                    ))}
                  </ul>
                </div>
              )}
              {userData.skills?.frameworks && (
                <div>
                  <h3 className="mb-2 font-semibold text-gray-800">Frameworks</h3>
                  <ul className="space-y-1 list-disc list-inside">
                    {userData.skills.frameworks.split(',').map((fw, index) => (
                      <li key={index} className="text-gray-700">{fw.trim()}</li>
                    ))}
                  </ul>
                </div>
              )}
              {userData.skills?.tools && (
                <div>
                  <h3 className="mb-2 font-semibold text-gray-800">Tools</h3>
                  <ul className="space-y-1 list-disc list-inside">
                    {userData.skills.tools.split(',').map((tool, index) => (
                      <li key={index} className="text-gray-700">{tool.trim()}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default CVBuilder; 9
import React, { useContext, useEffect, useState } from "react";
import { DoctorContext } from "../Context/Doctercontext";
import { Link } from "react-router-dom";
import { Calendar, Clock, User, ChevronRight } from "lucide-react";
import { doctors } from "../data/doctors";

const Booking = () => {
  const { doctor, setDoctor } = useContext(DoctorContext);
  const [currentDoctor, setCurrentDoctor] = useState(doctor || doctors[0]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    date: "",
    notes: "",
    fee: doctor ? doctor.price : doctors[0].price
  });
  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    if (doctor) {
      setCurrentDoctor(doctor);
      setFormData((prev) => ({ ...prev, fee: doctor.price }));
    }
  }, [doctor]);

  const handleDoctorSelect = (selected) => {
    setDoctor(selected);
    setCurrentDoctor(selected);
    setFormData((prev) => ({ ...prev, fee: selected.price }));
    setSubmitted(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.age || !formData.date) {
      alert("Please fill all required fields");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        age: "",
        gender: "",
        date: "",
        notes: "",
        fee: currentDoctor.price
      });
      setCurrentStep(1);
    }, 4000);
  };

  // Get next 30 days for date selection
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      if (date.getDay() !== 0) { // Exclude Sundays
        dates.push(date.toISOString().split('T')[0]);
      }
    }
    return dates;
  };

  return (
    <div className="section-soft min-h-screen py-12 px-4 theme-canvas">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link to="/" className="text-[#0A7BA6] hover:text-[#054E6F] font-semibold flex items-center gap-2 mb-6">
            ← Back to Home
          </Link>
          <div className="panel-premium p-8 border-l-4 border-[#0A7BA6]">
            <span className="inline-block px-4 py-2 kicker-badge rounded-full text-sm font-semibold mb-4">
              Step {currentStep} of 2
            </span>
            <h1 className="text-4xl font-bold text-gradient-soft mb-2">Book Your Doctor Appointment</h1>
            <p className="text-[#3F4A63]">Fill in your details below to confirm your appointment</p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          {/* Main Form */}
          <div className="space-y-6">
            {/* Step 1: Choose Doctor */}
            <div className="panel-premium overflow-hidden">
              <div className="hero-premium text-white p-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <User size={28} />
                  Step 1: Select a Doctor
                </h2>
              </div>
              <div className="p-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {doctors.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        handleDoctorSelect(item);
                        setCurrentStep(2);
                      }}
                      className={`rounded-lg border-2 p-4 text-left transition transform hover:scale-105 ${currentDoctor.id === item.id
                          ? "border-[#0A7BA6] bg-[#EAF7FB]"
                          : "border-[#D6EAF2] bg-white hover:border-[#1F9CBE]"
                        }`}
                    >
                      <p className="text-xs uppercase tracking-wider text-[#0A7BA6] font-bold">{item.speciality}</p>
                      <h3 className="mt-2 font-semibold text-[#1A1F3A]">{item.name}</h3>
                      <p className="mt-2 text-sm text-[#3F4A63]">
                        <Clock size={14} className="inline mr-1" />
                        {item.time}
                      </p>
                      <p className="mt-1 text-lg font-bold text-[#0FA968]">Rs {item.price}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 2: Patient Information */}
            {currentStep === 2 && (
              <div className="panel-premium overflow-hidden">
                <div className="hero-premium text-white p-6">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Calendar size={28} />
                    Step 2: Your Information
                  </h2>
                </div>
                <div className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email */}
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="block text-sm font-semibold text-[#3F4A63] mb-2">
                          Full Name <span className="text-[#D1345B]">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                          className="input-premium"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#3F4A63] mb-2">
                          Email <span className="text-[#D1345B]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                          className="input-premium"
                        />
                      </div>
                    </div>

                    {/* Phone and Age */}
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="block text-sm font-semibold text-[#3F4A63] mb-2">
                          Phone Number <span className="text-[#D1345B]">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (XXX) XXX-XXXX"
                          required
                          className="input-premium"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#3F4A63] mb-2">
                          Age <span className="text-[#D1345B]">*</span>
                        </label>
                        <input
                          type="number"
                          name="age"
                          min="1"
                          max="150"
                          value={formData.age}
                          onChange={handleChange}
                          placeholder="Enter age"
                          required
                          className="input-premium"
                        />
                      </div>
                    </div>

                    {/* Gender and Date */}
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="block text-sm font-semibold text-[#3F4A63] mb-2">Gender</label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          className="input-premium"
                        >
                          <option value="">Select gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#3F4A63] mb-2">
                          Appointment Date <span className="text-[#D1345B]">*</span>
                        </label>
                        <select
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="input-premium"
                        >
                          <option value="">Select a date</option>
                          {getAvailableDates().map((date) => (
                            <option key={date} value={date}>
                              {new Date(date).toLocaleDateString('en-US', {
                                weekday: 'short',
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="block text-sm font-semibold text-[#3F4A63] mb-2">
                        Additional Notes
                      </label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Any symptoms or concerns you'd like to mention?"
                        rows="3"
                        className="input-premium"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full px-6 py-4 btn-gradient flex items-center justify-center gap-2"
                    >
                      Confirm Appointment <ChevronRight size={20} />
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* Success Message */}
            {submitted && (
              <div className="panel-soft border-2 border-[#0FA968] p-8">
                <h3 className="text-2xl font-bold text-[#0FA968] mb-4">✓ Booking Confirmed!</h3>
                <p className="text-[#0A7A51] mb-4">Your appointment has been successfully booked.</p>
                <div className="space-y-2 text-[#3F4A63]">
                  <p><span className="font-semibold">Confirmation Email:</span> Sent to {formData.email}</p>
                  <p><span className="font-semibold">You'll receive:</span> Email confirmation, SMS reminder, and appointment details</p>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar: Summary */}
          <div className="space-y-6">
            {/* Appointment Summary */}
            <div className="panel-premium overflow-hidden sticky top-20">
              <div className="hero-premium text-white p-4">
                <h3 className="font-bold text-lg">Appointment Summary</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-xs uppercase text-[#7B8CA3] font-semibold">Doctor</p>
                  <p className="text-lg font-bold text-[#1A1F3A]">{currentDoctor.name}</p>
                  <p className="text-sm text-[#0A7BA6]">{currentDoctor.speciality}</p>
                </div>

                <div className="border-t pt-4">
                  <p className="text-xs uppercase text-[#7B8CA3] font-semibold mb-2">Consultation Time</p>
                  <p className="text-[#3F4A63]">{currentDoctor.time}</p>
                </div>

                {formData.date && (
                  <div className="border-t pt-4">
                    <p className="text-xs uppercase text-[#7B8CA3] font-semibold mb-2">Selected Date</p>
                    <p className="text-[#3F4A63]">
                      {new Date(formData.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                )}

                <div className="border-t pt-4 bg-[#EAF7FB] -mx-6 -mb-6 px-6 py-4">
                  <p className="text-xs uppercase text-[#7B8CA3] font-semibold mb-2">Consultation Fee</p>
                  <p className="text-3xl font-bold text-[#0FA968]">Rs {formData.fee.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="panel-soft p-6">
              <h4 className="font-bold text-[#054E6F] mb-4">Important Notes:</h4>
              <ul className="space-y-2 text-sm text-[#054E6F] list-disc list-inside">
                <li>Arrive 10 minutes before your appointment</li>
                <li>Bring valid ID and insurance card</li>
                <li>Bring medical reports if any</li>
                <li>Fee is non-refundable</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;

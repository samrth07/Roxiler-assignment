import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const ProfileCard = ({ user }) => {
  const [changePassForm, setChangePassForm] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg w-2xl p-8 transition-all hover:shadow-xl">
      <div className="flex items-center gap-9">
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-400 to-green-400 flex items-center justify-center text-white text-3xl font-bold shadow-md">
          {user.name?.[0]?.toUpperCase()}
        </div>
        <div className="flex flex-col">
          <h1 className="mt-4 text-2xl font-semibold text-gray-800">
            {user.name}
          </h1>
          <p className="text-gray-500">{user.email}</p>
        </div>
        <div
          className="border rounded-2xl bg-green-500 p-1.5 font-bold hover:scale-105 transition-all cursor-pointer"
          onClick={() => setChangePassForm(true)}
        >
          Change password
        </div>
      </div>

      <div className="my-6 border-t border-gray-200"></div>

      { user.Address ? (
        <><div className="text-2xl text-black font-bold mb-1.5">Address</div>
      <div className="grid grid-cols-3 grid-rows-2 gap-1">
        <Detail label="City" value={user.Address.city} />
        <Detail label="Street" value={user.Address.streat} />
        <Detail label="State" value={user.Address.State} />
        <Detail label="Pincode" value={user.Address.pincode} />
        <Detail label="Country" value={user.Address.country} />
      </div></>
      ) : (<></>)}

      {changePassForm && (
        <ChangePasswordForm onClose={() => setChangePassForm(false)} />
      )}
    </div>
  );
};

const Detail = ({ label, value }) => (
  <div className="flex gap-3.5 items-center bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition max-w-2xs">
    <span className="font-medium text-gray-600">{label}:</span>
    <span className="text-gray-800">{value || "—"}</span>
  </div>
);

const ChangePasswordForm = ({ onClose }) => {
  const token = localStorage.getItem("token");
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.oldPassword || !formData.newPassword) {
      toast.error("Please fill in both fields");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/changePass",
        formData,
        { headers: { Authorization: token } }
      );
      toast.success(res.data.message || "Password changed successfully!");
      setFormData({ oldPassword: "", newPassword: "" });

      onClose();
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.error || "Failed to change password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white shadow-lg rounded-2xl border">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
        Change Password
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Old Password</label>
          <input
            type="password"
            name="oldPassword"
            placeholder="Enter old password"
            value={formData.oldPassword}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">New Password</label>
          <input
            type="password"
            name="newPassword"
            placeholder="Enter new password"
            value={formData.newPassword}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          {loading ? "Updating..." : "Change Password"}
        </button>
      </form>
    </div>
  );
};

export default ProfileCard;

import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from "react-router-dom";
import Accordian from '../../component/new/footer';
import '../login_form/loginn.css';

const CreatePassword = () => {
  const navigate = useNavigate();
  const { id, token } = useParams();

  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`/NewPassword/${id}/${token}`, { password });

      if (response.status === 200) {
        toast.success("Password updated successfully.");
        navigate("/admin/panel/sign"); // Redirect to login page after successful password change
      } else {
        toast.error("Failed to change password.");
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("Failed to change password.");
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <div>
        <h2>Change Password</h2>
        <form onSubmit={handleSubmit} className='login_form'>
          <div>
            <label>New Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} required />
          </div>
          <button type="submit" disabled={loading}>{loading ? 'Changing Password...' : 'Change Password'}</button>
        </form>
      </div>
      <Accordian />
    </>
  );
};

export default CreatePassword;

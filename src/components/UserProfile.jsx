export default function UserProfile() {
  const { formData, clearFormData } = useContext(UserContext);

  if (!formData.name) {
    return (
      <p className="text-center text-gray-500 mt-4">No user registered yet</p>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-6 p-4 bg-white shadow-lg rounded-lg">
      <h2>User Profile</h2>
      <p>Email:</p>
    </div>
  );
}

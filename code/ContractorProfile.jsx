import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ContractorProfile() {
  const { id } = useParams();
  const [contractor, setContractor] = useState(null);

  useEffect(() => {
    fetch(`/api/contractors/${id}`)
      .then((res) => res.json())
      .then((data) => setContractor(data))
      .catch((err) => console.error("Error fetching contractor:", err));
  }, [id]);

  if (!contractor) return <p>Loading contractor profile...</p>;

  return (
    <div className="contractor-profile">
      <div className="profile-card">
        <img src="/images/default-photo.png" alt="Contractor" />
        <h2>{contractor.name}</h2>
        <p><strong>ID:</strong> {contractor.id}</p>
        <p><strong>Skill:</strong> {contractor.skill}</p>
        <p><strong>Rank:</strong> {contractor.rank}</p>
        <p><strong>Location:</strong> {contractor.location}</p>
        <p>{contractor.bio}</p>
        <button className="book-btn">Book This Contractor</button>
      </div>
    </div>
  );
}

export default ContractorProfile;

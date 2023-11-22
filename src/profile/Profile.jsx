// Profile.js
import React from "react";
import "./Profile.css"; // Create this CSS file to style your profile screen
import profileData from "../profileData.json";

const Profile = () => {
  // You can replace this with actual data fetching logic if needed
  // const profileData = require('./profileData.json');

  return (
    <div className="main">
      <div className="parent-id">
        <div className="background-image">
          {/* <img src="https://tse2.mm.bing.net/th?id=OIP.8zJYriRG6Cboi60OoY2xpwHaEo&pid=Api&P=0&h=180" alt="Profile" /> */}
        </div>
      </div>
      <div className="profile-container">
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.t8erzN60zbW80JVRDugaxwAAAA&pid=Api&P=0&h=180"
          alt="Profile"
          className="profile-pic"
        />
        <div className="profile-info">
          <h1>{profileData.name}</h1>
          {/* <p>{profileData.username}</p> */}

          <div className="stats">
            {/* <div>
              <button className="stats-button">
                <strong>{profileData.posts}</strong> posts
              </button>
            </div> */}
            <div>
              <button className="stats-button">
                <strong>{profileData.followers}</strong>
                <br />
              </button>
              <p className="btn-text">Followings</p>
            </div>
            <div>
              <button className="stats-button">
                <strong>{profileData.following}</strong>
                <br />
              </button>
              <p className="btn-text">Followings</p>
            </div>
            <div>
              <p className="bio-text">{profileData.bio}</p>
              <p className="insta">{profileData.instaId}</p>
              <div className="post-data">
                <strong>{profileData.posts}</strong>
              </div>
              <div className="vl"></div>
              <div className="hr"></div>
              <div className="hr1"></div>
              <div className="heading">
                <h2>A Changing World Order</h2>
                <p>
                  In the 21st century, we find ourselves at the cusp of a
                  profound transformation in the global order. The traditional
                  power structures that defined the post-World War II era are
                  undergoing a seismic shift, giving rise to a new and dynamic
                  geopolitical landscape. The emergence of multipolarity is
                  challenging the dominance of traditional superpowers, with
                  emerging economies gaining prominence. Nations like China,
                  India, and Brazil are asserting themselves on the world stage,
                  reshaping economic and political alliances. This shift is
                  accompanied by a reevaluation of international institutions,
                  as countries seek greater representation and a more equitable
                  distribution of influence. Simultaneously, technological
                  advancements are driving changes in the nature of power.
                  Cybersecurity, artificial intelligence, and space exploration
                  are becoming critical arenas of competition, challenging the
                  established norms of statecraft.
                </p>
                {/* Add an icon here */}
              </div>

              <div className="heading">
                <h2>Indian v/s Australia</h2>
                <p>
                  The cricketing rivalry between India and Australia has evolved
                  into one of the most riveting sagas in the sport's history.
                  These clashes, marked by fierce competition and sporting
                  spirit, have enthralled fans worldwide. From iconic moments
                  like VVS Laxman's heroic innings in 2001 to Steve Smith's
                  stellar performances, each encounter has etched indelible
                  memories. Whether on the bouncy tracks of the Gabba or the
                  turning wickets of Chennai, the battles have transcended the
                  boundaries of sport. Beyond the fierce competition, the
                  Indo-Australian cricket rivalry reflects the shared passion
                  and global appeal that cricket holds, uniting diverse cultures
                  in the love of the game.
                  <br />
                  <br />
                  Laying our childhood trauma up top, working with it slowly and
                  surely over two months.
                </p>
                {/* Add an icon here */}
              </div>

              <div className="heading">
                <h2>Write To Build</h2>
                <p>Writing is the first step to create:</p>
                <ul>
                  <li>stories</li>
                  <li>products</li>
                  <li>companies</li>
                </ul>
                {/* Add an icon here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

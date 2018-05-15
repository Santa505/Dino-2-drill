import React from "react";
  class Profiles extends React.Component {
  state = {
    expandedProfiles: {}
  };
  toggleExpand = id => {
    const { expandedProfiles } = this.state;
    expandedProfiles[id] = !expandedProfiles[id];
    console.log(`expandedProfiles[${id}]`, expandedProfiles[id]);
    this.setState({ expandedProfiles })
  };
  render() {
    return (
      <section id="profiles-container">
        <h2>Profiles</h2>
        <ul id="profiles">
          {this.props.listings.map(listing => {
            return (
              <li key={listing.title} onClick={this.toggleExpand(listing.id)}>
                <div className="profile-card">
                  <header class="profile-header">
                    <img src={listing.image} alt="listingimg" />
                    <h2>{listing.name}</h2>
                  </header>
                  {this.state.expandedProfiles[listing.id] && (
                    <ul>{listing.skills.map(skill => <li>{skill}</li>)}</ul>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}
export default Profiles;
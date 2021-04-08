import React from "react";

class SideCheckbox extends React.Component {
  state = {
    Colornames: {
      Free: false,
      Premium: false,
      Animation: false,
      Game: false,
      Chatbot: false,
      AugmentedReality: false,
      14: false,
      56: false,
      78: false,
      913: false,
      ComputerScience: false,
      Maths: false,
      Science: false,
      Language: false,
      Art: false,
      Music: false,
    },
  };
  
  chkclick = (e) => {
    var { name, checked } = e.target;

    this.setstat((e) => {
      var Selectedthings = e.Colornames;
      return (Selectedthings[name] = checked);
    });
  };

  render() {
    return (
      <div className="SideBar">
        <h3>SUBSCRIPTION</h3>
        <hr />
        <input type="checkbox" name="Free" OnChange={this.chkclick} />
        Free;
        <input type="checkbox" name="Premium" OnChange={this.chkclick} />
        Premium; &nbsp &nbsp
        <h3>ACTIVITY TYPE</h3>
        <hr />
        <input type="checkbox" name="Animation" OnChange={this.chkclick} />
        Animation;
        <input type="checkbox" name="Game" OnChange={this.chkclick} />
        Game;
        <input type="checkbox" name="Chatbot" OnChange={this.chkclick} />
        Chatbot;
        <input
          type="checkbox"
          name="Augmented Reality"
          OnChange={this.chkclick}
        />
        Augmented Reality; &nbsp &nbsp
        <h3>YEAR LEVEL</h3>
        <hr />
        <input type="checkbox" name="1-4" OnChange={this.chkclick} />
        1-4;
        <input type="checkbox" name="5-6" OnChange={this.chkclick} />
        5-6;
        <input type="checkbox" name="7-8" OnChange={this.chkclick} />
        7-8;
        <input type="checkbox" name="9-13" OnChange={this.chkclick} />
        9-13; &nbsp &nbsp
        <h3>SUBJECT MATTER</h3>
        <hr />
        <input
          type="checkbox"
          name="Computer Science"
          OnChange={this.chkclick}
        />
        Computer Science;
        <input type="checkbox" name="Maths" OnChange={this.chkclick} />
        Maths;
        <input type="checkbox" name="Science" OnChange={this.chkclick} />
        Science;
        <input type="checkbox" name="Language" OnChange={this.chkclick} />
        Language;
        <input type="checkbox" name="Art" OnChange={this.chkclick} />
        Art;
        <input type="checkbox" name="Music" OnChange={this.chkclick} />
        Music;
      </div>
    );
  }
}
export default SideCheckbox;

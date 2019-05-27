import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  state = {};
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{ borderRadius: "50%", height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Krishnan Nair</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Adress</h5>
            <p>New Zealand</p>
            <h5>Phone</h5>
            <p>(012) 345 6789</p>
            <h5>Email</h5>
            <p>my@email.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2013}
              endYear={2015}
              schoolName="Computer Power Plus"
              schoolDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock"
            />

            <Education
              startYear={2018}
              endYear={2018}
              schoolName="MVP Studio"
              schoolDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock"
            />
            <hr style={{ borderTop: "3px solid #22947" }} />
            <h2>Experience</h2>
            <Experience
              startYear={2015}
              endYear={2016}
              jobName="Helpdesk Support"
              jobDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock"
            />
            <Experience
              startYear={2018}
              endYear={2019}
              jobName="Software Developer"
              jobDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock"
            />
            <hr style={{ borderTop: "3px solid #22947" }} />
            <h2>Skills</h2>
            <Skills skill="Asp.Net MVC" progress={80} />
            <Skills skill="HTML/CSS" progress={65} />
            <Skills skill="javascript" progress={60} />
            <Skills skill="React" progress={50} />
            <Skills skill="Angular" progress={30} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;

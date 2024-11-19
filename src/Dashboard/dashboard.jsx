import "./dashboard.css";
import anime from "../Assets/clash.jpeg";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import PhotoIcon from "@mui/icons-material/Photo";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PersonIcon from "@mui/icons-material/Person";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import CropFreeIcon from "@mui/icons-material/CropFree";
import { Button, Divider, TextField } from "@mui/material";
import AttributionIcon from "@mui/icons-material/Attribution";
import { Card } from "react-bootstrap";
const menuIcons = [
  DonutLargeIcon,
  PhotoIcon,
  RemoveRedEyeIcon,
  PersonIcon,
  AllInclusiveIcon,
  WhatshotIcon,
];
const menuArray = [
  "Dashboard",
  "visual attachments",
  "perfect statistics",
  "Team Members",
  "server Data",
  "Messages",
];
const userList = [
  { name: "jack O'Connely", role: "UI / UX Designer" },
  { name: "Antonio King", role: "Web Designer" },
  { name: "Denise Jackson", role: "Developer" },
  { name: "Andy K.", role: "Project Manager" },
  { name: "Jamie Morano", role: "Web Designer" },
];
const Dashboard = () => {
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <div>
        <div className="d-flex align-items-center gap-2 bg-purple py-3 px-3">
          <img src={anime} width="50" height="50" className="rounded-circle" />
          <div className="pe-5">
            <div className="text-nowrap fs-1 text-light-shade">To Do BUDDY</div>
            <div className="text-nowrap fs-1 fw-600 text-white">
              NEAMU TIBERIU
            </div>
          </div>
        </div>
        <div
          className="px-4 py-3 d-flex flex-column gap-3 bg-dark"
          style={{ height: "100%" }}
        >
          {menuArray.map((item, index) => {
            const Icon = menuIcons[index];
            return (
              <div key={index} className="py-2 d-flex align-items-center gap-3">
                <Icon className="text-grey" />
                <div className="text-uppercase text-nowrap fs-2 fw-600 text-grey ps-2">
                  {item}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-light-secondary w-100">
        <div className="d-flex justify-content-between align-items-center bg-white border-bottom py-3 px-4">
          <div className="d-flex gap-3">
            <MenuRoundedIcon fontSize="large" sx={{ color: "#e8e8ea" }} />
            <div className="fs-5 fw-500">
              Project <span className="text-underline">Honeycomb</span>
            </div>
          </div>
          <div>
            <Button
              className="bg-dark"
              variant="contained"
              startIcon={<ControlPointIcon sx={{ fontWeight: 700 }} />}
              sx={{ fontWeight: 700, padding: 1.5, fontSize: 12 }}
            >
              ADD WIDGET
            </Button>
          </div>
        </div>
        <div className="d-flex p-4 gap-3 bg-light-secondary">
          <Card className="px-4 py-3">
            <TextField
              id="standard-basic"
              label="TEAM INVOLVED"
              variant="standard"
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: "12px",
                  fontWeight: 510,
                  color: "#B3B2B3",
                },
                "& .MuiInputLabel-root": {
                  fontSize: "12px",
                  fontWeight: 510,
                  color: "#B3B2B3",
                },
                "& .MuiInput-underline:before": {
                  borderBottomWidth: "2px",
                  borderBottomColor: "#E8E8EA",
                },
                "& .MuiInput-underline:after": {
                  borderBottomWidth: "2px",
                  borderBottomColor: "#E8E8EA",
                },
              }}
            />
            <div className="pt-3">
              {userList.map((item, index) => {
                const name = item.name;
                const role = item.role;
                return (
                  <div
                    className="d-flex align-items-center gap-3 py-1"
                    key={index}
                  >
                    <img
                      src={anime}
                      width="40"
                      height="40"
                      className="rounded-circle"
                    />
                    <div className="pe-5">
                      <div className="text-nowrap fs-1 fw-600 ">{name}</div>
                      <div className="text-nowrap fs-1 text-grey">{role}</div>
                    </div>
                  </div>
                );
              })}
              <Button
                className="bg-dark mt-2 w-100"
                variant="contained"
                startIcon={<ControlPointIcon sx={{ fontWeight: 700 }} />}
                sx={{ fontWeight: 700, padding: 1.2, fontSize: 12 }}
              >
                ADD TEAMMATE
              </Button>
            </div>
          </Card>
          <Card className="px-4 py-4 flex-grow-1">
            <div className="fs-1 fw-600 text-grey mt-2">PROJECT ACTIVITY</div>
            <Divider
              flexItem
              sx={{
                fontWeight: 600,
                padding: "2px",
                borderBottom: "2px solid #989a9f",
              }}
            />

            <table class="table mt-2">
              <tbody>
                <tr>
                  <td scope="row" className="border-right">
                    <div className="text-uppercase fw-600 fs-1 text-white rounder-left ps-2 bg-info ">
                      Upload
                    </div>
                    <div className="fs-1 text-grey">11:50 am</div>
                  </td>
                  <td>
                    <div className="text-nowrap fs-1 fw-600 ">
                      Comb - HomePage.psd
                    </div>
                    <div className="text-nowrap fs-1 text-grey">
                      by Antonio King
                    </div>
                  </td>
                  <td>
                    <div class="progress" style={{ height: 8 }}>
                      <div
                        class="progress-bar progress-bar-striped bg-info"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="texts-nowrap fs-1 text-grey text-center fw-600 pt-1">
                      (12.3 of 30 mb)
                    </div>
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="border-right">
                    <div className="text-uppercase fw-600 fs-1 text-white rounder-left ps-2 bg-warning">
                      Task
                    </div>
                    <div className="fs-1 text-grey">11:50 am</div>
                  </td>
                  <td>
                    <div className="text-nowrap fs-1 fw-600 ">
                      Contact_Form.psd <span>/ Development</span>
                    </div>
                    <div className="text-nowrap fs-1 text-grey">by Andy K</div>
                  </td>
                  <td className="text-center">
                    <Button
                      className=" mt-2"
                      variant="outlined"
                      startIcon={<CropFreeIcon sx={{ fontWeight: 700 }} />}
                      sx={{
                        fontWeight: 700,
                        padding: 1.4,
                        fontSize: 12,
                        width: 100,
                        height: 40,
                        color: "#989a9f",
                        border: "1.5px solid #f6f6f6",
                      }}
                    >
                      VIEW
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="border-right">
                    <div className="text-uppercase fw-600 fs-1 text-white rounder-left ps-2 bg-danger">
                      Deleted
                    </div>
                    <div className="fs-1 text-grey">11:50 am</div>
                  </td>
                  <td>
                    <div className="text-nowrap fs-1 fw-600 ">
                      Development UI Kit (v.12.08.2013)
                    </div>
                    <div className="text-nowrap fs-1 text-grey">
                      by Denise Jackson
                    </div>
                  </td>
                  <td className="text-center">
                    <Button
                      className=" mt-2 bg-danger rounded"
                      variant="outlined"
                      startIcon={
                        <SettingsBackupRestoreIcon sx={{ fontWeight: 700 }} />
                      }
                      sx={{
                        fontWeight: 700,
                        padding: 1.4,
                        fontSize: 12,
                        width: 110,
                        height: 40,
                        color: "#ffffff",
                        border: "1.5px solid #f6f6f6",
                      }}
                    >
                      Restore
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="border-right">
                    <div className="text-uppercase fw-600 fs-1 text-white rounder-left ps-2 bg-success">
                      Working
                    </div>
                    <div className="fs-1 text-grey">11:50 am</div>
                  </td>
                  <td>
                    <div className="text-nowrap fs-1 fw-600 ">
                      Graphs & Statistics.psd
                    </div>
                    <div className="text-nowrap fs-1 text-grey">
                      by Neamu Tiberiu
                    </div>
                  </td>
                  <td className="text-center">
                    <Button
                      className=" mt-2"
                      variant="outlined"
                      startIcon={<AttributionIcon sx={{ fontWeight: 700 }} />}
                      sx={{
                        fontWeight: 700,
                        padding: 1.4,
                        fontSize: 12,
                        width: 100,
                        height: 40,
                        color: "#989a9f",
                        border: "1.5px solid #f6f6f6",
                      }}
                    >
                      PEAK
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

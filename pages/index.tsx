import React from "react";
import styles from "../styles/Home.module.scss";
import Meta from "../components/Meta";
import Testemoninals from "../components/Testemoninals";
import { Typography, Grid } from "@material-ui/core";
import { Parallax, Background } from "react-parallax";
import IconCard from "../components/IconCard";
import { Menu, Schedule, Android, People } from "@material-ui/icons";
import ServiceCard from "../components/ServiceCard";
import MiscCard from "../components/MiscCards";

export default function Home() {
  return (
    <>
      <Meta title="Accreditaion Machine" description="" />
      <div className={styles.MainContainer}>
        <div className="svgBG">
          <Parallax strength={350}>
            <Background>
              <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='2160' height='900' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1562%26quot%3b)' fill='none'%3e%3cpath d='M1512 560L0 560 L0 324.68Q32.66 237.34%2c 120 270Q131.82 209.82%2c 192 221.65Q235.75 193.41%2c 264 237.16Q340.84 242%2c 336 318.83Q322.92 233.75%2c 408 220.66Q499.7 192.36%2c 528 284.06Q556.78 240.84%2c 600 269.62Q652.37 201.99%2c 720 254.36Q738.27 200.63%2c 792 218.9Q839.01 193.91%2c 864 240.92Q919.32 224.24%2c 936 279.55Q978.36 249.91%2c 1008 292.27Q1053 265.27%2c 1080 310.27Q1106.98 217.25%2c 1200 244.24Q1253.6 177.84%2c 1320 231.44Q1382.12 221.56%2c 1392 283.67Q1458.13 229.8%2c 1512 295.92z' fill='%23182f5d'%3e%3c/path%3e%3cpath d='M1488 560L0 560 L0 304.99Q89.63 322.62%2c 72 412.25Q68.85 337.1%2c 144 333.95Q174.2 292.15%2c 216 322.36Q296.04 282.4%2c 336 362.44Q413.8 320.24%2c 456 398.04Q457.19 327.23%2c 528 328.41Q554.08 282.5%2c 600 308.58Q698.99 287.57%2c 720 386.56Q759.57 306.13%2c 840 345.7Q894 279.7%2c 960 333.7Q1032.04 285.74%2c 1080 357.78Q1124.65 330.43%2c 1152 375.09Q1163.14 314.24%2c 1224 325.38Q1289.88 271.25%2c 1344 337.13Q1365.16 286.29%2c 1416 307.45Q1458.92 278.38%2c 1488 321.3z' fill='%2325467d'%3e%3c/path%3e%3cpath d='M1464 560L0 560 L0 446.92Q12.31 387.23%2c 72 399.54Q142.73 350.27%2c 192 421.01Q238.06 395.07%2c 264 441.14Q306.22 411.36%2c 336 453.58Q397.45 443.03%2c 408 504.49Q429.19 453.69%2c 480 474.88Q494.77 417.65%2c 552 432.43Q603.88 364.31%2c 672 416.19Q725.63 397.82%2c 744 451.45Q794.06 429.51%2c 816 479.57Q825.62 417.19%2c 888 426.8Q910.38 377.18%2c 960 399.56Q1044.24 363.81%2c 1080 448.05Q1127.53 375.58%2c 1200 423.1Q1257.04 408.14%2c 1272 465.19Q1298.65 371.84%2c 1392 398.49Q1441.38 375.88%2c 1464 425.26z' fill='%23356cb1'%3e%3c/path%3e%3cpath d='M1560 560L0 560 L0 580.29Q62.08 522.37%2c 120 584.45Q162.8 507.25%2c 240 550.05Q268.78 458.83%2c 360 487.61Q436.28 443.89%2c 480 520.17Q557.75 477.92%2c 600 555.68Q646.88 530.56%2c 672 577.44Q716.15 549.6%2c 744 593.75Q757.49 487.24%2c 864 500.73Q930.98 447.71%2c 984 514.69Q1027.96 486.65%2c 1056 530.62Q1130.2 484.82%2c 1176 559.02Q1183.06 494.08%2c 1248 501.14Q1277.04 458.18%2c 1320 487.22Q1406.22 453.44%2c 1440 539.67Q1517.78 497.45%2c 1560 575.23z' fill='white'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1562'%3e%3crect width='2160' height='900' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e" />
            </Background>
            <div style={{ height: "100vh" }}>
              <div className={`${styles.insideStyles} ${styles.card}`}>
                <p
                  className={styles.Heading}
                  style={{ fontSize: "48px", margin: "0px", padding: "0px" }}
                >
                  We are an Accreditation Digital agency
                </p>
                <Typography variant="h6" align="center">
                  We focus on accrediting schools, from kindergartens to
                  universities...
                </Typography>
                <Typography variant="h6" align="center">
                  You name it.
                </Typography>
                <Typography variant="h6" align="center">
                  We also specialize in registering companies and more!
                </Typography>
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    background: "transparent",
                    left: 0,
                    top: "90%",
                    display: "flex",
                    flexDirection: "row",
                    padding: "0px 20px",
                    justifyContent: "center",
                  }}
                >
                  <IconCard image={<Menu style={{ fontSize: "48px" }} />} />
                  <IconCard image={<Menu style={{ fontSize: "48px" }} />} />
                  <IconCard image={<Menu style={{ fontSize: "48px" }} />} />
                </div>
              </div>
            </div>
          </Parallax>
        </div>

        <hr className="Line" />

        <div className={styles.Services}>
          <Grid>
            <br />
            <Typography className={`${styles.Heading} ${styles.Mdfont}`}>
              We are leaders in Accerditation
            </Typography>
            <br />
            <Grid xs={12} item container spacing={2} style={{ margin: "0px" }}>
              {[
                {
                  title: "10 years of experience",
                  list: [
                    "Accredited more than 30 institutions",
                    "Worked with kindergartens to universities",
                    "Registered more than 20 companies and counting",
                    "We link providers to accredited learning material developers",
                    "We outsource assessors/moderators to providrs who need them",
                  ],
                  icon: (
                    <Schedule
                      color="secondary"
                      style={{
                        fontSize: "144px",
                        margin: "0px auto",
                        padding: "0px 0px 15px 0px",
                      }}
                    />
                  ),
                },
                {
                  title: "Software powered accreditation",
                  list: [
                    "Smart technology, powering our accreditation process",
                    "Quick delivery for accreditation processes",
                    "Little to no room for errors",
                    "Our software is tried and tested to assure maximum performance",
                  ],
                  icon: (
                    <Android
                      style={{
                        fontSize: "144px",
                        margin: "0px auto",
                        padding: "0px 0px 15px 0px",
                        color: "var(--qunit)",
                      }}
                    />
                  ),
                },
                {
                  title: "Customer Service you won’t find anywhere else",
                  list: [
                    `A dedicated team who’ll address your queries`,
                    "All-round customer support",
                    "Frequent updates on your service progress",
                    "Mentorship to entrepreneurs who buy educational franchises intending to exist",
                  ],
                  icon: (
                    <People
                      color="primary"
                      style={{
                        fontSize: "144px",
                        margin: "0px auto",
                        padding: "0px 0px 15px 0px",
                      }}
                    />
                  ),
                },
              ].map((elem, index) => {
                return (
                  <Grid
                    item
                    xs={12}
                    lg={4}
                    key={`Meta-info-#no${index}`}
                    style={{ display: "flex" }}
                  >
                    <MiscCard
                      icon={elem.icon}
                      classes={styles}
                      title={elem.title}
                      list={elem.list}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>

          <div style={{ margin: "30px 0px" }}>
            <Grid container>
              <Grid item xs={12}>
                <Typography
                  align="center"
                  variant="h5"
                  className={`${styles.Heading} ${styles.Lgfont}`}
                >
                  <span style={{ color: "var(--tertairy)" }}>Our</span> Clients
                </Typography>
              </Grid>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((elem, index) => {
                return (
                  <Grid
                    item
                    xs={6}
                    sm={4}
                    lg={3}
                    key={`Client-elem-#no${index}`}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Menu style={{ fontSize: "48px", margin: "auto" }} />
                  </Grid>
                );
              })}
            </Grid>
          </div>

          <div className="svgBG">
            <Parallax strength={350}>
              <Background>
                <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='2160' height='900' preserveAspectRatio='none' viewBox='0 0 2160 900'%3e%3cg mask='url(%26quot%3b%23SvgjsMask2261%26quot%3b)' fill='none'%3e%3crect width='2160' height='900' x='0' y='0' fill='url(%23SvgjsLinearGradient2262)'%3e%3c/rect%3e%3cpath d='M1228.62 757.1 a182.7 182.7 0 1 0 365.4 0 a182.7 182.7 0 1 0 -365.4 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1974.0308283816057 794.6296486227786L2039.1939057548573 633.3453724880949 1877.9096296201735 568.1822951148434 1812.746552246922 729.4665712495271z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M327.6573943516237 617.2081247691148L538.1653331829655 770.1510948128356 691.1083032266863 559.6431559814938 480.6003643953445 406.70018593777297z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M2108.9532642502686 131.51195062743207L2150.6368451055555-23.46236458520832 2014.5172161365765 10.47607065338201z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M35.640538710691544 938.9601677000834L149.38200482542265 850.0955950868432 60.51743221218243 736.3541289721121-53.22403390254867 825.2187015853523z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M723.85 895.01 a192.57 192.57 0 1 0 385.14 0 a192.57 192.57 0 1 0 -385.14 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M610.8291180814471 558.2928111275992L541.5187031262167 299.6228210209981 282.8487130196157 368.93323597622845 352.159127974846 627.6032260828296z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1632.1522938771093 279.95096214130865L1748.8970148027765 409.60911024159634 1761.810441977397 163.20624121564134z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M877.9136455436694 90.02582057312088L696.4401491017936 37.989132830895564 644.4034613595683 219.4626292727714 825.8769578014441 271.49931701499673z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1726.83 189.99 a263.6 263.6 0 1 0 527.2 0 a263.6 263.6 0 1 0 -527.2 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask2261'%3e%3crect width='2160' height='900' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='50%25' y1='100%25' x2='50%25' y2='0%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient2262'%3e%3cstop stop-color='rgba(0%2c 94%2c 190%2c 0.48)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(8%2c 186%2c 52%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e" />
              </Background>
              <div style={{ height: 500 }}>
                <div className={`${styles.insideStyles} ${styles.card}`}>
                  <Typography className={`${styles.Heading} ${styles.Lgfont}`}>
                    Let's work{" "}
                    <span style={{ color: "var(--qunit" }}>together</span>
                  </Typography>
                </div>
              </div>
            </Parallax>
          </div>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                className={`${styles.Heading} ${styles.Mdfont}`}
                align="left"
              >
                Accreditation Services
              </Typography>
            </Grid>
            {[
              {
                title: "Umalusi Accreditation",
                description: "",
                price: "R25,000",
                Servicetype: "Accreditation",
              },
              {
                title: "QCTO Accreditation",
                description: "",
                price: "R15,000",
                Servicetype: "Accreditation",
              },
              {
                title: "SETA Programme Accreditation",
                description: "",
                price: "R5,000 per programme",
                Servicetype: "Accreditation",
              },
            ].map((elem, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  lg={3}
                  key={`Service-item-#no${index}`}
                >
                  <ServiceCard elem={elem} />
                </Grid>
              );
            })}
            <Grid item xs={12}>
              <Typography
                variant="h5"
                className={`${styles.Heading} ${styles.Mdfont}`}
                align="left"
              >
                Registrations
              </Typography>
            </Grid>
            {[
              {
                title: "CSD with Teasury Registration",
                description: "",
                price: "R2,000",
                Servicetype: "Registration",
              },
              {
                title: "Company Registration",
                description: "",
                price: "R1,800",
                Servicetype: "Registration",
              },
            ].map((elem, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  lg={3}
                  key={`Service-item-#no${index}`}
                >
                  <ServiceCard elem={elem} />
                </Grid>
              );
            })}
            <Grid item xs={12}>
              <Typography
                variant="h5"
                className={`${styles.Heading} ${styles.Mdfont}`}
                align="left"
              >
                Other Services
              </Typography>
            </Grid>
            {[
              {
                title: "Tax Clearance",
                description: "",
                price: "R2,000",
                Servicetype: "Accreditation",
              },
              {
                title: "Acquisition of SARS report",
                description: "",
                price: "R1,500",
                Servicetype: "Accreditation",
              },
            ].map((elem, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  lg={3}
                  key={`Service-item-#no${index}`}
                >
                  <ServiceCard elem={elem} />
                </Grid>
              );
            })}
          </Grid>
          <hr className="Line" />

          <Typography
            variant="h5"
            className={`${styles.Heading} ${styles.Mdfont}`}
            align="left"
          >
            Testimoninals
          </Typography>
          <Testemoninals />
        </div>
      </div>
      <br />
    </>
  );
}

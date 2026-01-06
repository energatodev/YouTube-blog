function Home() {
  console.log("Home Page");
}
function Project() {
  console.log("Project Page");
}
function Download() {
  console.log("Download Page");
}
function About() {
  console.log("About Page");
}

Home_btn = document.getElementById("home");

Home_btn.onclick = Home();

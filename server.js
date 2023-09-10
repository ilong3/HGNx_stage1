const express = require("express");
const app = express();

app.use(express.json());
app.get('/api', (req, res) => {
  // extract query params from request object
  const {slack_name, track} = req.query;
    if (!slack_name || !track) {
        return res.status(400).json({ error: 'slack_name and track are required parameters' });
      }
    //   fetch the current day
      const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  // Get current UTC time
  const now = new Date();
  // Extract the date and time components
    const year = now.getUTCFullYear();
    const month = String(now.getUTCMonth() + 1).padStart(2, '0');
    const day = String(now.getUTCDate()).padStart(2, '0');
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');
    // Format the UTC time as "yyyy-MM-ddTHH:mm:ssZ"
    const utcTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
  // Get GitHub URL of the file being run
  const githubFileUrl = `https://github.com/ilong3/HNGx_stage1/blob/main/server.js`;
  // Get GitHub URL of the full source code
  const githubRepoUrl = 'https://github.com/ilong3/HNGx_stage1'
    return res.status(200).json({
        slack_name :req.query.slack_name,
        current_day: currentDay,
        utc_time: utcTime,
        track:req.query.track,
        github_file_url: githubFileUrl,
        github_repo_url: githubRepoUrl,
        status_code: 200
    })
})
PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`the server is running on port${PORT}`)
});
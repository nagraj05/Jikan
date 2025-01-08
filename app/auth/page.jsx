'use client'
import { Grid2 } from "@mui/material";
import Authform from "../components/Authform";




export default function Auth() {
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={8} className="h-screen">
        <video
          className="h-full object-cover"
          autoPlay
          loop
          muted
        > 
          <source src="/gojo.mp4" type="video/mp4"/>
          </video>
      </Grid2>
      <Grid2 size={4}>
        <Authform />
      </Grid2>
    </Grid2>
  );
}

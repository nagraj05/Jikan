import { Button, TextField } from "@mui/material";
import { Input } from "@/components/ui/input";
// import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";




export default function Authform() {
    return (
        <div className="flex flex-col gap-2 justify-center items-center h-full">
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            {/* <button className={buttonVariants()}>Login</button> */}
            <Button>Register</Button>
        </div>
    )
}
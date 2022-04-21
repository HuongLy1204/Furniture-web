import { Chip, Container, Link as MuiLink, Stack } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { ROUTE_LIST } from "./route";
import Image from "next/image";
import Logo from "../../../public/logo.svg";
import { useRouter } from "next/router";
import clsx from "clsx";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Typography } from "@mui/material";

function HeaderDesktop() {
  const router = useRouter();

  return (
    <Box zIndex={100} bgcolor={"white"} position={"fixed"} height={77} width={"100%"} borderColor={"gray"} borderBottom={0.03} pt={0} mt={0} display={{ xs: "none", lg: "block" }}>
      {/* <Image src={Logo} />  */}

      <Box size="lg">
        <Stack alignItems={"center"} direction="row">
          <Box  width="15%">
            <Image
            height={150}
              src={Logo}
              alt="logo"
              layout="responsive"
              objectFit="scale-down"
            />
          </Box>
          <Box   width="65%">
            <Stack pt={1.5}  justifyContent={"space-around"} direction="row">
              {ROUTE_LIST.map((route) => (
                <Link key={route.path} href={route.path} passHref>
                  <MuiLink
                    sx={{
                      color: "black",
                      fontSize: "16px",
                      fontWeight: "bolder",
                    }}
                    className={clsx({ active: router.pathname === route.path })}
                    variant="button"
                  >
                    {route.label}
                  </MuiLink>
                </Link>
              ))}
               </Stack>
               </Box>
              <Box pt={1} width="20%">
                <Stack justifyContent={"center"} direction="row" spacing={2}>
                  <Chip color="success" size="medium" icon={<LocalPhoneIcon />} label="0333311574" />
                </Stack>
              </Box>
            </Stack>
         
       
      </Box>
    </Box>
  );
}
export default HeaderDesktop;

import { ButtonGroup, Container, IconButton, Stack, Text, useColorModeValue, Image} from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, } from 'react-icons/fa'
import { Logo } from './Logo'
import logoF1 from "./steering-wheel.png";

export const Footer = () => (
  <Container
  as="footer"
  role="contentinfo"
  maxW={{
    base: '100%',
    md: '80%',
    lg: '75%',
  }}
>
  <Stack
    spacing={{
      base: '4',
      md: '5',
    }}
  >
    <Stack justify="space-between" direction="row" align="center">
    <Stack direction={"row"} align={"center"}>
							<Image
								src={logoF1}
								h={{ base: "50px", sm:"40px", md: "50px", lg: "70px" }}
								alt="Steering-Wheel"
							/>
							<Text
								fontFamily={"heading"}
								color={useColorModeValue("black", "white")}
								fontSize={{ base: "0px", sm: "25px", md: "26px", lg: "32px" }}
							>
								8th Gear
							</Text>
						</Stack>
      <ButtonGroup variant="ghost">
        <IconButton
          as="a"
          href="#"
          aria-label="LinkedIn"
          icon={<FaLinkedin fontSize= "30px"/>}
        />
        <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="30px" />} />
      </ButtonGroup>
    </Stack>
  </Stack>
</Container>
)
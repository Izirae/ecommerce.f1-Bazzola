import {
  ChevronDownIcon,
  ChevronRightIcon, CloseIcon, HamburgerIcon, MoonIcon,
  SunIcon
} from "@chakra-ui/icons";
import {
  Avatar, Box, Button, Center, Collapse, Flex, Icon, IconButton, Image, Link, Menu,
  MenuButton, MenuDivider, MenuItem, MenuList, Popover, PopoverContent, PopoverTrigger, PopoverArrow, Spacer, Stack, Text, useBreakpointValue, useColorMode, useColorModeValue, useDisclosure
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import logoF1 from "./steering-wheel.png";

export default function Nav() {
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onToggle } = useDisclosure();
	return (
		<Box>
			<Flex
				bg={useColorModeValue("black", "#252d4d")}
				color={useColorModeValue("white", "white")}
				minH={"70px"}
				px={{ base: 4 }}
				borderBottom={1}
				borderStyle={"solid"}
				borderColor={useColorModeValue("gray.200", "gray.900")}
				align={"center"}
			>
				<Flex
					flex={{ md: "auto" }}
					ml={{ base: -2 }}
					display={{ base: "flex", md: "none" }}
				>
					<IconButton
						onClick={onToggle}
						icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
						variant={"ghost"}
						aria-label={"Toggle Navigation"}
					/>
				</Flex>

				<Box justify={{ base: "center", md: "start" }} alignItems={"center"}>
					<RouterLink to={"/"}>
						<Stack direction={"row"} align={"center"}>
							<Image
								src={logoF1}
								h={{ base: "50px", sm:"40px", md: "50px", lg: "70px" }}
								alt="Steering-Wheel"
							/>
							<Text
								textAlign={useBreakpointValue({ base: "center", md: "left" })}
								fontFamily={"heading"}
								color={useColorModeValue("white", "white")}
								fontSize={{ base: "0px", sm: "25px", md: "26px", lg: "32px" }}
							>
								8th Gear
							</Text>
						</Stack>
					</RouterLink>
				</Box>

				<Box
					bg={useColorModeValue("red.600", "#151025")}
					borderRadius={"md"}
					borderBottomRadius={0}
					display={{ base: "none", md: "flex" }}
					ml={10}
					mt={"auto"}
					p={2}
					maxH={"40px"}
				>
					<Link as={RouterLink} to={"/"} fontSize={"m"} fontWeight={600} me={5}>
						Productos:
					</Link>
					<DesktopNav />
				</Box>
				<Spacer />

				<Box mr={3}>
					<CartWidget/>
				</Box>

				<Box alignItems={"center"}>
					<Stack direction={"row"} spacing={7} align={"center"}>
						<Button onClick={toggleColorMode} variant='outline'>
							{colorMode === "light" ? <MoonIcon /> : <SunIcon />}
						</Button>

						<Menu>
							<MenuButton
								as={Button}
								rounded={"full"}
								variant={"link"}
								cursor={"pointer"}
								minW={0}
							>
								<Avatar size={"sm"} />
							</MenuButton>
							<MenuList alignItems={"center"}>
								<br />
								<Center>
									<Avatar size={"2xl"} />
								</Center>
								<br />
								<Center>
									<p>Username</p>
								</Center>
								<br />
								<MenuDivider />
								<MenuItem>Your Servers</MenuItem>
								<MenuItem>Account Settings</MenuItem>
								<MenuItem>Logout</MenuItem>
							</MenuList>
						</Menu>
					</Stack>
				</Box>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</Box>
	);
}

const DesktopNav = () => {
	const linkColor = useColorModeValue("white", "white");
	const linkHoverColor = useColorModeValue("gray.700", "pink.200");
	const popoverContentBgColor = useColorModeValue("black", "#252d4d");

	return (
		<Stack direction={"row"} spacing={4}>
			{NAV_ITEMS.map((navItem) => (
				<Box key={navItem.label} maxH={"30px"}>
					<Popover trigger={"hover"} placement={"bottom-start"}>
						<PopoverTrigger>
							<Link
								p={2}
								fontSize={"sm"}
								fontWeight={500}
								_disabled
								color={linkColor}
								_hover={{
									textDecoration: "none",
									color: linkHoverColor,
								}}
							>
								{navItem.label}
							</Link>
						</PopoverTrigger>

						{navItem.children && (
							<PopoverContent
								border={0}
								boxShadow={"xl"}
								bg={popoverContentBgColor}
								p={4}
								rounded={"xl"}
								minW={"sm"}
							>
								<PopoverArrow bg={popoverContentBgColor}/>
								<Stack>
									{navItem.children.map((child) => (
										<DesktopSubNav key={child.label} {...child} />
									))}
								</Stack>
							</PopoverContent>
						)}
					</Popover>
				</Box>
			))}
		</Stack>
	);
};

const DesktopSubNav = ({ label, subchildren }) => {
	const popoverContentBgColor = useColorModeValue("gray.800", "#303c65");

	return (
		<Box display={"row"} p={2} rounded={"md"}>
			<Popover trigger={"hover"} placement={"auto-start"}>
				<Link
					as={RouterLink}
					to={"/categoria/" + label}
					role={"group"}
					style={{ textDecoration: 'none' }}
				>
					<PopoverTrigger>
						<Stack direction={"row"} align={"center"}>
							<Box>
								<Text
									transition={"all .3s ease"}
									_groupHover={{ color: "pink.500" }}
									fontWeight={500}
								>
									{label}
								</Text>
							</Box>
							<Flex
								transition={"all .3s ease"}
								transform={"translateX(-10px)"}
								opacity={0}
								_groupHover={{ opacity: "100%", transform: "translateX(0)" }}
								justify={"flex-end"}
								align={"center"}
								flex={1}
							>
								<Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
							</Flex>
						</Stack>
					</PopoverTrigger>
				</Link>
				{subchildren && (
					<PopoverContent
						border={0}
						boxShadow={"xl"}
						bg={popoverContentBgColor}
						p={4}
						rounded={"xl"}
						minW={"sm"}
					>
						<PopoverArrow bg={popoverContentBgColor}/>
						<Stack>
							{subchildren.map((child) => (
								<DesktopSubSubNav key={child.key} cat={label} {...child} />
							))}
						</Stack>
					</PopoverContent>
				)}
			</Popover>
		</Box>
	);
};

const DesktopSubSubNav = ({ label, cat }) => {
	return (
		<Link
			as={RouterLink}
			to={"/categoria/" + cat + "/" + label}
			role={"group"}
			display={"row"}
			p={2}
			rounded={"md"}
			style={{ textDecoration: 'none' }}
		>
			<Stack direction={"row"} align={"center"}>
				<Box>
					<Text
						transition={"all .3s ease"}
						_groupHover={{ color: "pink.400" }}
						fontWeight={500}
					>
						{label}
					</Text>
				</Box>
				<Flex
					transition={"all .3s ease"}
					transform={"translateX(-10px)"}
					opacity={0}
					_groupHover={{ opacity: "100%", transform: "translateX(0)" }}
					justify={"flex-end"}
					align={"center"}
					flex={1}
				>
					<Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
				</Flex>
			</Stack>
		</Link>
	);
};

const MobileNav = () => {
	return (
		<Stack
			bg={useColorModeValue("red.50", "gray.800")}
			p={4}
			display={{ md: "none" }}
		>
			{NAV_ITEMS.map((navItem) => (
				<MobileNavItem key={navItem.label + "mov"} {...navItem} />
			))}
		</Stack>
	);
};

const MobileNavItem = ({ label, children }) => {
	const { isOpen, onToggle } = useDisclosure();
	const colorChild = useColorModeValue("gray.700", "gray.200");
	const colorBorder = useColorModeValue("gray.200", "gray.700");

	return (
		<>
			<Stack spacing={4} onClick={children && onToggle}>
				<Flex
					py={2}
					as={Link}
					justify={"space-between"}
					align={"center"}
					_hover={{
						textDecoration: "none",
					}}
				>
					<Text fontWeight={600} color={useColorModeValue("gray.600", "gray.200")}>
						{label}
					</Text>
					{children && (
						<Icon
							as={ChevronDownIcon}
							transition={"all .25s ease-in-out"}
							transform={isOpen ? "rotate(180deg)" : ""}
							w={6}
							h={6}
						/>
					)}
				</Flex>

				<Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
					<Stack
						mt={2}
						pl={4}
						borderLeft={1}
						borderStyle={"solid"}
						borderColor={useColorModeValue("gray.200", "gray.700")}
						align={"start"}
					>
						{children &&
							children.map((child) => (
								<Stack key={child.label + "mov"}>
									<Link py={2} as={RouterLink} to={"/categoria/" + child.label}>
										<Flex
											py={2}
											justify={"space-between"}
											align={"center"}
											_hover={{
												textDecoration: "none",
											}}
										>
											<Text fontWeight={600} color={colorChild}>
												{child.label}
											</Text>
										</Flex>
									</Link>

									<Collapse
										in={isOpen}
										animateOpacity
										style={{ marginTop: "0!important" }}
									>
										<Stack
											mt={2}
											pl={4}
											borderLeft={1}
											borderStyle={"solid"}
											borderColor={colorBorder}
											align={"start"}
										>
											{child.subchildren &&
												child.subchildren.map((subchild) => (
													<Link
														key={subchild.label + "mov"}
														py={2}
														as={RouterLink}
														to={"/categoria/" + child.label + "/" + subchild.label}
													>
														{subchild.label}
													</Link>
												))}
										</Stack>
									</Collapse>
								</Stack>
							))}
					</Stack>
				</Collapse>
			</Stack>
		</>
	);
};

const NAV_ITEMS = [
	{
		label: "Por Equipo",
		children: [
			{
				label: "Ferrari",
				subchildren: [
					{ key: "fRopa", label: "Ropa" },
					{ key: "fAcc", label: "Accesorios" },
				],
			},
			{
				label: "F1",
				subchildren: [
					{ key: "fUnoRopa", label: "Ropa" },
					{ key: "fUnoAcc", label: "Accesorios" },
				],
			},
			{
				label: "Aston Martin",
				subchildren: [
					{ key: "amRopa", label: "Ropa" },
					{ key: "amAcc", label: "Accesorios" },
				],
			},
			{
				label: "Alfa Romeo",
				subchildren: [
					{ key: "arRopa", label: "Ropa" },
					{ key: "arAcc", label: "Accesorios" },
				],
			},
		],
	},
];

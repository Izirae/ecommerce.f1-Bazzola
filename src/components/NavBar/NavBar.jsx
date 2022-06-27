import logoF1 from './steering-wheel.png';
import CartWidget from '../CartWidget/CartWidget';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
  IconButton,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useBreakpointValue,
  Image,
} from '@chakra-ui/react';
import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  return (
      <Box>

      <Flex
        bg={useColorModeValue('#FFF159', 'blue.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} alignItems={'center'}>
        <Stack direction={'row'}  align={'center'}>
          <a href='../public/index.html'><Image src = {logoF1} h={{base: '30px', md: '50px', lg: '70px'}} alt='Steering-Wheel'/></a>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
            fontSize={{ base: '20px', md: '26px', lg: '32px' }}>
            <a href='../public/index.html'>8th Gear</a>
          </Text>
          </Stack>


          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        
        <Flex mr={3}>
          <CartWidget cant={27}/>
        </Flex>

        <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7} align={'center'}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                    />
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
          </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'m'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
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

const DesktopSubNav = ({ label, href, subLabel, clickeado, children }) => {
const popoverContentBgColor = useColorModeValue('white', 'gray.800');

return (
<Box
display={'row'}
p={2}
rounded={'md'}>
  <Popover trigger={'hover'} placement={'right'}>
    <Link
    href={href}
    onClick={clickeado}
    role={'group'}
    _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <PopoverTrigger>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
              {label}
            </Text>
          </Box>
          <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </PopoverTrigger>
      </Link>
        {children && (
          <PopoverContent
          border={0}
          boxShadow={'xl'}
          bg={popoverContentBgColor}
          p={4}
          rounded={'xl'}
          minW={'sm'}>
            <Stack>
              {children.map((child) => (
                <DesktopSubSubNav key={child.label} {...child} />
              ))}
            </Stack>
          </PopoverContent>
        )}
  </Popover>
</Box>
)
};

const DesktopSubSubNav = ({label, href, clickeado}) => {
  return (
    <Link
      href={href}
      onClick={clickeado}
      role={'group'}
      display={'row'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
          transition={'all .3s ease'}
          _groupHover={{ color: 'pink.400' }}
          fontWeight={500}>
            {label}
          </Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
  </Link>
  );
}

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('red.50', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href}) => {
  const { isOpen, onToggle } = useDisclosure();
  const colorChild = useColorModeValue('gray.700', 'gray.200');
  const colorBorder = useColorModeValue('gray.200', 'gray.700');

  return (
    <>
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Stack>
              <Link key={child.label} py={2} href={child.href} onClick={child.clickeado} children={child.children}>
                      <Flex
                      py={2}
                      as={Link}
                      href={child.href ?? '#'}
                      justify={'space-between'}
                      align={'center'}
                      _hover={{
                        textDecoration: 'none',
                      }}>
                      <Text
                        fontWeight={600}
                        color={colorChild}>
                        {child.label}
                      </Text>
                    </Flex>
                </Link>

                    <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                      <Stack
                        mt={2}
                        pl={4}
                        borderLeft={1}
                        borderStyle={'solid'}
                        borderColor={colorBorder}
                        align={'start'}>
                        {child.children &&
                          child.children.map((subchild) => (
                            <Link key={subchild.label} py={2} href={subchild.href} onClick={subchild.clickeado}>
                              
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
    label: 'Productos:',
    href: '#',
  },
  {
    label: 'Por piloto',
    children: [
      {
        label: 'Piloto 1',
        href: '#',
        clickeado:()=> alert("me hiciste click"),
        children: [{label:'hola1', href: '#', clickeado:()=> alert("hola1"),}, {label:'hola2', href: '#', clickeado:()=> alert("hola2"),}]
      },
      {
        label: 'Piloto 2',
        href: '#',
        clickeado:()=> alert("me hiciste click"),
        children: [{label:'hola3', href: '#', clickeado:()=> alert("hola3"),}, {label:'hola4', href: '#', clickeado:()=> alert("hola4"),}]
      },
      {
        label: 'Piloto 3',
        href: '#',
        clickeado:()=> alert("me hiciste click"),
        children: [{label:'hola5', href: '#', clickeado:()=> alert("hola5"),}, {label:'hola6', href: '#', clickeado:()=> alert("hola6"),}]
      },
    ],
  },
  {
    label: 'Por equipo',
    children: [
      {
        label: 'Equipo 1',
        href: '#',
        clickeado:()=> alert("me hiciste click"),
        children: [{label:'hola7', href: '#', clickeado:()=> alert("hola7"),}, {label:'hola8', href: '#', clickeado:()=> alert("hola8"),}]
      },
      {
        label: 'Equipo 2',
        href: '#',
        clickeado:()=> alert("me hiciste click"),
        children: [{label:'hola9', href: '#', clickeado:()=> alert("hola9"),}, {label:'hola10', href: '#', clickeado:()=> alert("hola10"),}]
      },
      {
        label: 'Equipo 3',
        href: '#',
        clickeado:()=> alert("me hiciste click"),
        children: [{label:'hola11', href: '#', clickeado:()=> alert("hola11"),}, {label:'hola12', href: '#', clickeado:()=> alert("hola12"),}]
      },
    ],
  },
];
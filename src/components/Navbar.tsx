import { useState, useEffect } from 'react';
import { createStyles, Navbar, UnstyledButton, Tooltip, Title, rem, Avatar } from '@mantine/core';
import {
  IconGauge,
  // IconDeviceDesktopAnalytics,
  IconFingerprint,
  // IconCalendarStats,
  IconUser,
  // IconSettings,
  IconChevronLeft,
  IconMoneybag,
  IconCreditCard
} from '@tabler/icons-react';
import { useSidebar } from '../hooks/useSidebar';
import { Link } from 'react-router-dom';
import where from '../helpers/where';
import first from '../helpers/first';

interface ILink {
  icon: any;
  label: string;
  link: string;
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
  },

  aside: {
    flex: `0 0 ${rem(60)}`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRight: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]}`,
  },

  main: {
    flex: 1,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  mainLink: {
    width: rem(44),
    height: rem(44),
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  mainLinkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },

  title: {
    boxSizing: 'border-box',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xl,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    padding: theme.spacing.md,
    paddingTop: rem(18),
    height: rem(60),
    borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
      }`,
  },

  logo: {
    display: 'flex',
    justifyContent: 'center',
    height: rem(60),
    paddingTop: theme.spacing.md,
    borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
      }`,
    marginBottom: theme.spacing.xl,
  },

  togglerButton: {
    boxSizing: 'border-box',
    display: 'block',
    textDecoration: 'none',
    borderTopRightRadius: theme.radius.md,
    borderBottomRightRadius: theme.radius.md,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    padding: `0 ${theme.spacing.md}`,
    fontSize: theme.fontSizes.sm,
    marginRight: theme.spacing.md,
    fontWeight: 500,
    height: rem(44),
    lineHeight: rem(44),

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },
  link: {
    boxSizing: 'border-box',
    display: 'block',
    textDecoration: 'none',
    borderTopRightRadius: theme.radius.md,
    borderBottomRightRadius: theme.radius.md,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    padding: `0 ${theme.spacing.md}`,
    fontSize: theme.fontSizes.sm,
    marginRight: theme.spacing.md,
    fontWeight: 500,
    height: rem(44),
    lineHeight: rem(44),

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  linkActive: {
    '&, &:hover': {
      borderLeftColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
        .background,
      backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
        .background,
      color: theme.white,
    },
  },
}));

const mainLinksMockdata: ILink[] = [
  { icon: IconGauge, label: 'Dashboard', link: '/' },
  // { icon: IconDeviceDesktopAnalytics, label: 'Estadisticas', link: '/statics' },
  // { icon: IconCalendarStats, label: 'Reportes', link: '/reports' },
  { icon: IconUser, label: 'Mi cuenta', link: '/my-account' },
  { icon: IconFingerprint, label: 'Seguridad', link: '/security' },
  { icon: IconCreditCard, label: 'Pagos', link: '/payments' },
  { icon: IconMoneybag, label: 'Tasa de cambio', link: '/exchange' },
  // { icon: IconSettings, label: 'Configuraciones', link: '/settings' },
];

export default function Nav() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(window.location.pathname);
  const [sidebarOpen, setSidebarOpen] = useState(
    localStorage.getItem('sidebarOpen') === 'true' || false
  );
  const sidebar = useSidebar();
  useEffect(() => {
    
    localStorage.setItem('sidebarOpen', sidebarOpen.toString());
  }, [sidebarOpen]);

  const mainLinks = mainLinksMockdata.map((link) => (
    <Tooltip
      label={link.label}
      position='right'
      withArrow
      transitionProps={{ duration: 0 }}
      key={link.label}
    >
      <Link to={link.link} className={cx(classes.mainLink, { [classes.mainLinkActive]: active === link.link })}>
        <UnstyledButton
          onClick={() => setActive(link.link)}
          className={cx(classes.mainLink, { [classes.mainLinkActive]: active === link.link })} 
        >
          <link.icon size='1.4rem' stroke={1.5} />
        </UnstyledButton>
      </Link>
    </Tooltip>
  ));

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    sidebar.setSidebar(!sidebar.active, sidebar.width === 0 ? 300 : 0);
  };
  useEffect(() => {
    const storedSidebarOpen = localStorage.getItem('sidebarOpen') === 'true';
    setSidebarOpen(storedSidebarOpen);
    sidebar.setSidebar(storedSidebarOpen, storedSidebarOpen ? 300 : 0);
  }, [sidebar, setSidebarOpen]);

  const links = mainLinksMockdata.map((link) => (
    <Link
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      to={link.link}
      onClick={() => {
        setActive(link.link);
      }}
      key={link.label}
    >
      {link.label}
    </Link>
  ));

  return (
    <Navbar height='100vh' width={{ sm: sidebar.width }}>
      <Navbar.Section grow className={classes.wrapper}>
        <div className={classes.aside}>
          <div className={classes.logo}>
            <Avatar
              mt={-8}
              color='light'
              size={45}
              radius='md'
            >
              <IconUser size='1.4rem' stroke={1.9} />
            </Avatar>
          </div>
          {mainLinks}
          <Tooltip
            label={sidebar.active ? 'Cerrar panel' : 'Abrir panel'}
            position='right'
            withArrow
            transitionProps={{ duration: 0 }}
          >
            <UnstyledButton
              onClick={() => handleSidebar()}
              className={cx(classes.mainLink, { [classes.mainLinkActive]: active === active })}
              mt='auto'
            >
              <IconChevronLeft
                size='1.4rem'
                stroke={1.5}
                style={{
                  transition: 'transform 350ms ease',
                  transform: sidebar.active ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </UnstyledButton>
          </Tooltip>
        </div>
        {
          sidebar.active && (
            <div className={classes.main}>
              <Title order={4} className={classes.title}>
                {first(where(mainLinksMockdata, ((link: ILink) => link.link == window.location.pathname))).label}
              </Title>
              {links}
            </div>
          )
        }
      </Navbar.Section>
    </Navbar>
  );
}
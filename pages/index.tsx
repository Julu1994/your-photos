import styled from '@emotion/styled';
import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
type User = {
  company: any;
  id: number;
  name: string;
};

type HomePageProps = {
  users: User[];
};
const BackgroundBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center', 
  justifyContent: 'center', 
  position: 'relative',
  height: '100%',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url('./cover.png')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    zIndex: -1
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(173, 216, 230, 0.5)',
    zIndex: -1
  },
}));

const Content = styled('div')({
  position: 'relative',
  padding: '1rem',
  zIndex: 1,
  extAlign: 'center'
});

export default function HomePage({ users }: HomePageProps) {
  return (
    <Layout>
      <BackgroundBox>
        <Content>
          <Typography variant="h3" component="h2"
            sx={{ color: "	#FFFFFF", fontWeight: "900", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", textAlign: "center", mb: "2rem", mt: "2rem" }}>
            User List
          </Typography>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {users.map(user => (
              <React.Fragment key={user.id}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={user.name} src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                
                    <ListItemText
                      primary= { <Link href={`/users/${user.id}`} style={{textDecoration: "none"}}>{user.name}</Link>}
                      secondary={
                        <React.Fragment>
                        <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                        >
              {user.company.name}
              </Typography>
            </React.Fragment>
          }>
                  
                  </ListItemText>

              </ListItem>
                <Divider variant="inset" component="li" />
                </React.Fragment>
            ))}
          </List>
        </Content>
      </BackgroundBox>
    </Layout> 
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return {
    props: { users },
  };
};

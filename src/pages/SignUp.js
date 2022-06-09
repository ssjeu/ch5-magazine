// import React from "react";
// import { auth, db, storage } from "../shared/firebase";
// // 비밀번호 기반 계정 만들기
// import { createUserWithEmailAndPassword } from "firebase/auth";
// // 계정 생성 완료 후 firestore 저장
// import { collection, addDoc } from "firebase/firestore";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// const Signup = () => {
//   const id_ref = React.useRef(null);
//   const name_ref = React.useRef(null);
//   const pw_ref = React.useRef(null);
//   const file_link_ref = React.useRef(null);

//   const signupFB = async () => {
//     // if(id_ref.current.value === ""){
//     //     return false;
//     // }

//     const user = await createUserWithEmailAndPassword(
//       auth,
//       id_ref.current.value,
//       pw_ref.current.value
//     );
//     console.log(user);

//     const user_doc = await addDoc(collection(db, "users"), {
//       user_id: user.user.email,
//       name: name_ref.current?.value,
//       image_url: file_link_ref.current?.url,
//     }); // 어디 collection에 저장할거야, 넣을 data
//     console.log(user_doc.id);
//   };

//   const uploadFB = async (e) => {
//     console.log(e.target.files);
//     const uploaded_file = await uploadBytes(
//       ref(storage, `images/${e.target.files[0].name}`),
//       e.target.files[0]
//     );
//     console.log(uploaded_file);

//     const file_url = await getDownloadURL(uploaded_file.ref);
//     console.log(file_url);

//     file_link_ref.current = {url: file_url};
//   };

//   return (
//     <div>
//       아이디(이메일) : <input ref={id_ref} /> <br />
//       이름 : <input ref={name_ref} /> <br />
//       비밀번호 : <input ref={pw_ref} type="password" /> <br />
//       이미지 : <input type="file" onChange={uploadFB} />
//       <br />
//       <button onClick={signupFB}>회원가입</button>
//     </div>
//   );
// };

// export default Signup;


import React from "react";
import { auth, db, storage } from "../shared/firebase";
// 비밀번호 기반 계정 만들기
import { createUserWithEmailAndPassword } from "firebase/auth";
// 계정 생성 완료 후 firestore 저장
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
    const id_ref = React.useRef(null);
    const name_ref = React.useRef(null);
    const pw_ref = React.useRef(null);
    const file_link_ref = React.useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    const user = createUserWithEmailAndPassword(
        auth,
        data.get('email'),
        data.get('password')
      );
      console.log(user);
  };


//   const signupFB = async () => {
//     // if(id_ref.current.value === ""){
//     //     return false;
//     // }

//     const user = await createUserWithEmailAndPassword(
//       auth,
//       id_ref.current.value,
//       pw_ref.current.value
//     );
//     console.log(user);

//     const user_doc = await addDoc(collection(db, "users"), {
//       user_id: user.user.email,
//       name: name_ref.current?.value,
//       image_url: file_link_ref.current?.url,
//     }); // 어디 collection에 저장할거야, 넣을 data
//     // console.log(user_doc.id);
//   };

  const uploadFB = async (e) => {
    console.log(e.target.files);
    const uploaded_file = await uploadBytes(
      ref(storage, `images/${e.target.files[0].name}`),
      e.target.files[0]
    );
    console.log(uploaded_file);

    const file_url = await getDownloadURL(uploaded_file.ref);
    console.log(file_url);

    file_link_ref.current = {url: file_url};
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            회원가입
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="이름"
                  name="name"
                  autoComplete="name"
                  ref={name_ref}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="이메일"
                  name="email"
                  autoComplete="email"
                  ref={id_ref}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="비밀번호"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  ref={pw_ref}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            //   onClick={signupFB}
            >
              회원가입
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  이미 계정이 있으신가요? (로그인)
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
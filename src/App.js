function App() {
  const profile = {
    firstName: 'Robin',
    lastName: 'Wieruch',
    };
    const address = {
    country: 'Germany',
    city: 'Berlin',
    };
    const {firstName, lastName} = profile;
    const user = {
    // ...profile,
    firstName,
    lastName,
    gender: 'male',
    ...address,
    }; 
    console.log(user);
  
  return (
    <div>Hello!!! Computer</div>
  );
}
export default App;

import { store } from 'app/store';
import { PrivateRoute } from 'components/Common';
import Header from 'components/Common/Header';
import AdminLayout from 'components/Layout/AdminLayout';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Provider store={store}> 
      <Header />
      <Routes>
        <Route
          path="admin"
          element={
            <PrivateRoute
              redirectPath="/login"
            >
              <AdminLayout />
            </PrivateRoute>
          }
        />
      </Routes>
       </Provider> 
    </>
  );
}

export default App;

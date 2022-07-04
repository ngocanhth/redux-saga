import { PrivateRoute } from 'components/Common';
import Header from 'components/Common/Header';
import AdminLayout from 'components/Layout/AdminLayout';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;

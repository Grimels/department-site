import * as React from 'react';

import { Navbar } from 'styled/Navigation';
import { AdminNavBarBrand } from 'styled/Admin';

export const AdminNavbar: React.FC = () => {
    return (
        <Navbar expand='sm'>
            <AdminNavBarBrand color='white'>Администратор</AdminNavBarBrand>
        </Navbar>
    );
};

import * as React from 'react';
import GlobalStyles from '@mui/material/GlobalStyles';

export default function GlobalCssOverride() {
    const headingGlobalStyles = <GlobalStyles
        styles={{
            h1: { color: '#000', fontSize: '36px', lineHeight: '40px' },
            h2: { color: '#000', fontSize: '24px', lineHeight: '26px' },
            h3: { color: '#000', fontSize: '18px', lineHeight: '20px' },
            h4: { fontSize: '14px' },
            '@media (min-width:640px)': {
                h4: { fontSize: '16px' },
            },
            '@media (min-width: 992px)': {
                h4: { fontSize: '18px' },
            },

            // a: {
            //     fontWeight: 400,
            //     fontSize: 14,
            //     lineHeight: '22px',
            //     textDecorationLine: 'underline',
            //     color: '#131313',
            // }
        }}
    />;

    return (
        <React.Fragment>
            {headingGlobalStyles}
        </React.Fragment>
    );
}

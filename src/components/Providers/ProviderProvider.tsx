import { CssVarsProvider, StyledEngineProvider } from '@mui/joy/styles'
import { PropsWithChildren } from 'react'
import DataProvider from './Data'


export default function ProviderProvider(props: PropsWithChildren) {
    return(
        <StyledEngineProvider injectFirst>
          <CssVarsProvider disableTransitionOnChange>
            <DataProvider>
                {props.children}
            </DataProvider>
          </CssVarsProvider>
        </StyledEngineProvider>
    )
}
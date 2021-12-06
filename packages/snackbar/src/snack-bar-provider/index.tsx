import * as React from 'react';

export const SnackBarContext = React.createContext(undefined)

const AUTO_DISMISS = 5000

export function SnackBarProvider({ children }: any) {
  const [alerts, setAlerts] = React.useState([])
  
  const activeAlertIds = alerts.join(',')
  React.useEffect(() => {
    if (activeAlertIds.length > 0) {
      const timer = setTimeout(() => setAlerts((alerts) => alerts.slice(0, alerts.length - 1)), AUTO_DISMISS)
      return () => clearTimeout(timer)
    }
  }, [activeAlertIds])

  const addAlert = (alert) => setAlerts((alerts) => [alert, ...alerts])

  const value = { addAlert }
    
  return (
    <SnackBarContext.Provider value={value}>
      {children}
      {alerts.map((alert) => <span key={alert}>{alert}</span>)}
    </SnackBarContext.Provider>
  )
}
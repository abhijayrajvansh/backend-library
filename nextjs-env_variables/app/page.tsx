const page = () => {

  const NODE_ENV = process.env.NODE_ENV
  const DATABASE_URI = process.env.DATABASE_URI
  const DEV_DB_NAME = process.env.DEV_DB_NAME
  
  console.log("\nNODE_ENV:", NODE_ENV)
  console.log("\nDATABASE_URI:", DATABASE_URI)

  console.log("\nDEV_DB_NAME:", DEV_DB_NAME)
  console.log("\nPROD_DB_NAME:", process.env.PROD_DB_NAME)
  console.log("\nADMIN_DB_NAME:", process.env.ADMIN_DB_NAME)

  // combined url + db name:
  const connection_string = `${DATABASE_URI}/${DEV_DB_NAME}`
  console.log("\nconnection_string:", connection_string)

  return (
    <div className="wrapper">
        <h1 className="heading">Environment Variables</h1>
        <p className="paragraph">see console log for env details</p>
    </div>
  )
}

export default page;
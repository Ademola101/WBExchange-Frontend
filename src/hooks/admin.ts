export const useAdmin = () => {
    const admin = JSON.parse(localStorage.getItem('wb-admin-user') as string)
    console.log(admin)
    return admin
}
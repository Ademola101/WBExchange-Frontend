export const useUser = () => {
    const user = JSON.parse(localStorage.getItem('wb-admin-user') as string)
    console.log(user)
    return user
}
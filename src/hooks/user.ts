export const useUser = () => {
    const user = JSON.parse(localStorage.getItem('wb-user') as string)
    console.log(user)
    return user
}
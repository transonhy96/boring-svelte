export const truncateWalletAddress = (address: string, separator = '...') => {
    return address ? address.slice(0, 6) + separator + address.slice(-6) : null;
};
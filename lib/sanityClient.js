import sanityClient from "@sanity/client";

export const client = sanityClient({
    projectId: '6c3xp962', 
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skhw3J9gEdBGPmvM4oaxmsJct92QeV2yaVT0YzSAEZIeQ32qA6SB0grLGJHsZlGJKIaZUbD3bEwTQsRRTRhc2pue6NWIZqyVb8tlsFAGfN6VrixbroLaBei2yosoQAceYCMJPa2nbJEgZr4duOBewwavOTLmK4MgeKGeM2LNISwSf2MQd2h9',
    useCdn: false, 
})
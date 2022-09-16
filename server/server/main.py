from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn  # type: ignore


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/plants")
async def get_plants():
    return [
        {
            "id": 1,
            "common_name": "cornstalk dracanae",
            "botanical_name": "Dracanae fragrans",
            "description": (
                "Dracaena fragrans (cornstalk dracaena), is a flowering plant species"
                " that is native throughout tropical Africa, from Sudan south to       "
                "      Mozambique, west to Côte d'Ivoire and southwest to Angola,"
                " growing in upland regions at 600–2,250 m (1,970–7,380 ft) altitude."
                " It is also known as             striped dracaena, compact dracaena,"
                " and corn plant."
            ),
            "image_url": (
                "https://aristonflowers.com/wp-content/uploads/2021/04/cornplant.jpg"
            ),
        },
        {
            "id": 2,
            "common_name": "money tree",
            "botanical_name": "Pachira aquatica",
            "description": (
                "Money tree, also commonly referred to Guiana chestnut, is a species of"
                " tree native to Central and South America that has become an          "
                "   attractive houseplant thanks to its hardy nature. First popularized"
                " as a houseplant in Taiwan during the 1980s, the money tree is"
                " prominent among             those who practice feng shui and is"
                " believed to create positive “chi,” or energy, in the home. This alone"
                " has made it a staple in offices, banks,             and homes alike."
            ),
            "image_url": "https://cdn.apartmenttherapy.info/image/upload/v1591489353/gen-workflow/product-listing/moneytreeamz.jpg",
        },
        {
            "id": 3,
            "common_name": "common sunflower",
            "botanical_name": "Helianthus annuus",
            "description": (
                "The common sunflower (Helianthus annuus) is a large annual forb of the"
                " genus Helianthus grown as a crop for its edible oil and seeds.       "
                "     This sunflower species is also used as wild bird food, as"
                " livestock forage (as a meal or a silage plant), in some industrial"
                " applications, and as             an ornamental in domestic gardens."
                " The plant was first domesticated in the Americas. Wild H. annuus is a"
                " widely branched annual plant with many             flower heads. The"
                " domestic sunflower, however, often possesses only a single large"
                " inflorescence (flower head) atop an unbranched stem."
            ),
            "image_url": (
                "https://www.collinsdictionary.com/images/full/sunflower_145293031.jpg"
            ),
        },
        {
            "id": 4,
            "common_name": "chinese onion",
            "botanical_name": "Allium chinense",
            "description": (
                "The Chinese onion is known by many names—called rakkyo in Japan or"
                " yeombuchu in Korea. It is a hardy plant native to China and"
                " naturalized             in Japan, Korea, Russia and Mongolia. It"
                " grows as a dense evergreen clump with small, pretty, deep rose pink"
                " flowers in spring into summer. It is tolerant            of a range"
                " of growing conditions. These plants may go dormant in early summer,"
                " and return to growing during monsoon or at the latest, fall. They"
                " multiply            almost as much as multiplier onions. "
            ),
            "image_url": "https://www.tasteatlas.com/Images/Ingredients/fd5a2de64e3a40bdad156127ced56a67.jpg",
        },
        {
            "id": 5,
            "common_name": "ponytail palm",
            "botanical_name": "Beaucarnea recurvata",
            "description": (
                "Ponytail palm is a plant with a confused identity. Not a true palm"
                " (the family Arecaceae), it is one of seven species in the genus"
                " Beaucarnea             or Nolina. The group has been included in the"
                " Nolinaceae, Agavaceae, and Ruscaceae. Regardless of its taxonomic"
                " designation, this group of small tropical trees             is native"
                " to Mexico, Belize and Guatemala. Ponytail palm, Beaucarnea recurvata"
                " (or Nolina recurvata) from semi-desert areas of southeastern Mexico,"
                " is the species             often grown as a low-maintenance"
                " houseplant in temperate climates, as well as being used as a"
                " landscape specimen in dry, warm climates (zones 9-10). This succulent"
                "             is often mistakenly called a palm because of its single"
                " trunk with leaves at the top. Other common names include Bottle Palm"
                " and Elephant’s Foot Tree."
            ),
            "image_url": "https://www.gardeningknowhow.com/wp-content/uploads/2020/11/ponytail-palm.jpg",
        },
        {
            "id": 6,
            "common_name": "shrub verbena",
            "botanical_name": "Lantana camara",
            "description": (
                "Lantana plants are evergreens of the broadleaf variety. Although they"
                " may act like a vine, they are classified by botanists as shrubs.     "
                "        Lantana's colorful blooms make good specimen plants. They are"
                " also used as border shrubs and as ground cover in areas with full"
                " sunshine in warm climates.             The plants tolerate salt spray"
                " very well, making them popular in yards located near the ocean. In"
                " colder climates, where lantana plants are treated as annuals,        "
                "     they are commonly found growing in hanging baskets. The variety"
                " L. montevidensis is more vine-like than other varieties and makes a"
                " better hanging plant."
            ),
            "image_url": "http://mobileimages.lowes.com/productimages/87b8540c-907d-4cc2-89f9-6b421b434472/02964863.jpg",
        },
        {
            "id": 7,
            "common_name": "marigold",
            "botanical_name": "Tagetes erecta",
            "description": (
                "No annual is more cheerful or easier to grow than the marigold. These"
                " flowers are the spendthrifts among annuals, bringing a wealth of"
                " gold,             copper, and brass into our summer and autumn"
                " gardens. The flower's popularity probably derives in part from its"
                " ability to bloom brightly all summer long.             Just be sure"
                " to deadhead to keep the blooms coming!"
            ),
            "image_url": "https://cdn.shopify.com/s/files/1/1257/7487/products/edn-seedpod-marigold_a32798fb-05ac-462a-b1e6-ead9f1d86c3d_640x.png?v=1604944955",
        },
    ]


@app.get("/plants/{plant_id}")
async def get_plant(plant_id: int):
    return {"plant_id": plant_id}


def start():
    uvicorn.run("server.main:app", host="0.0.0.0", port=8000, reload=True)


if __name__ == "__main__":
    start()

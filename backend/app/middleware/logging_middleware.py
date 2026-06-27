import time

from fastapi import Request


async def logging_middleware(

    request: Request,

    call_next

):

    start = time.time()

    response = await call_next(

        request

    )

    duration = round(

        time.time() - start,

        4

    )

    print()

    print("=" * 70)

    print("REQUEST LOG")

    print("=" * 70)

    print(f"METHOD        : {request.method}")

    print(f"PATH          : {request.url.path}")

    print(f"STATUS        : {response.status_code}")

    print(f"TIME          : {duration} sec")

    print(f"CLIENT        : {request.client.host}")

    print("=" * 70)

    print()

    response.headers["X-Process-Time"] = str(

        duration

    )

    return response
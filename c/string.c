#include <stdio.h>

int main(void)
{
  char user_name[15];
  printf("who goes there?\n");
  scanf("%s", user_name);
  printf("hi %s, I'm cpu, nice to meet you.\n", user_name);
}
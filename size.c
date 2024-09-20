#include<stdio.h>
int main
{
    float a=0.0;
    long int y=10;
    printf("%d" ,sizeof(a)==sizeof(a+y));
    return 0;
}